<template>
    <div class="pt-4 md:pt-6 md:p-3 w-full">
    
        <div v-for="item in votes" class=" text-white" >
            
            <div class="flex  gap-6 xl:gap-10 w-full" v-if="item.id == route.params.id">
                
                <div v-if="item.options" class="flex flex-col w-full ">
                    <div v-for="(vote, i)  in item.options" :key="vote" class="text-[20px]  gap-3 xl:gap-5 w-full">

                            <button @click="voteCollection(item.docId, i, vote.percent, item.totalVotes)" class="flex w-full justify-between items-center gap-2 rounded-lg text-gray-300 duration-300 hover:text-green-400 "  :id="i"  v-bind:id="i">
                                <div class="text-sm md:text-base text-left font-semibold 2xl:text-xl  w-[60%] ">{{vote.option}}</div>
                                <div class="flex gap-2 bg-[#dcfd1e00] rounded-r-lg  py-3  border border-l-2  border-l-gray-300 border-y-0 border-r-0 items-center w-[60%]">
                                    <div class="flex  gap-1  bg-yellow-600 rounded-r-full rounded-l-2xl py-3 lg:py-5  " :style="{ width: (vote.percent) / (item.totalVotes).toFixed(2) * 100  + '%' }"></div>
                                    <div v-if="vote.percent == 0" class="text-white">0%</div>
                                    <div v-else class="text-sm md:text-base xl:text-lg text-white">{{(vote.percent / item.totalVotes).toFixed(2) * 100}}%</div>
                                </div>
                            </button>
                    
                    </div>

                    <div class="flex flex-col gap-1 lg:gap-3 ">
                        <div class="text-sm lg:text-base font-medium text-blue-300 pt-6">{{ item.totalVotes }} votes</div>

                        <div v-for="(vote, i) in item.voter" class="flex text-[12px] md:text-[14px]  gap-3 lg:gap-5 w-full">
                            
                            <!-- <div v-if="i.date && i.choice" class="text-white flex flex-col lg:flex-row gap-2"> -->
                            <div v-if="vote.usersid == usersid.value" class="text-white flex flex-col lg:flex-row gap-2">
                                <div class="flex gap-2 items-center">
                                    <i class="fa-solid fa-circle-info md:text-base text-gray-400"></i>
                                    <div>You voted</div>
                                    <div class="text-green-400 font-medium text-[12px] md:text-[15px]">{{ vote.choice }}</div> 
                                </div>
                                
                                 <div>On {{ formatDate(vote.date) }}</div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>

    </div>

</template>

<script setup>

import {ref, onMounted, onUnmounted} from 'vue'
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { useRoute} from 'vue-router';
import db from '../main.js'
import { collection, onSnapshot, doc, query, updateDoc, getDoc} from "firebase/firestore"; 

const route = useRoute();
const votes = ref([]);
const isLoggedIn = ref(false)
const auth = getAuth();

let usersName = []
let userIcons = []
let usersid = []

const formatDate = (date) => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour:'numeric', minute:'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

onMounted(() => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            let names  = user.displayName
            let photo  = user.photoURL
            let id  = user.uid
            usersName.value = names
            userIcons.value = photo
            usersid.value = id
            
        }
        else{
            isLoggedIn.value = false;
        }
    })
})

onMounted(() => {
const voteCollection = query(collection(db, 'Votes'));
const unsubscribe = onSnapshot(voteCollection, (snapshot) => {
votes.value = snapshot.docs.map((doc) => ({
//   options: doc.data().Vote,
  options: doc.data().options,
  totalVotes: doc.data().totalVotes,
  author:doc.data().author,
  id:doc.data().id,
  docId:doc.id,
  voter:doc.data().voters
}));

});

// Unsubscribe from snapshot listener when component is unmounted
onUnmounted(unsubscribe);
});

const voteCollection = async (id, i, percent,total) => {
    try {
        const userId = usersid.value; 

        const voteDocRef = doc(db, 'Votes', id);
        const docSnapshot = await getDoc(voteDocRef);

        if (docSnapshot.exists()) {
            const voteData = docSnapshot.data();

            if (voteData.voters && voteData.voters.includes(userId)) {
                // console.error("User has already voted for this item");
                return;
            }
            voteData.options[i].percent = ((percent + 1) / (total + 1));
            
            voteData.options[i].percent = percent + 1 
            voteData.totalVotes = total + 1;

            voteData.voters.push({
                    usersid:userId,
                    date:new Date(Date.now()).toLocaleString(),
                    choice:voteData.options[i].option
                });

            if (!voteData.voters) {
                voteData.voters = [userId];
            } 
            else {
                voteData.voters.push(userId);
            }
        
            await updateDoc(voteDocRef, voteData);
            console.log("Vote option updated successfully");
        } else {
            console.error("Document does not exist");
        }
    } catch (error) {
        console.error("Error updating vote option:", error);
    }
};


</script>








