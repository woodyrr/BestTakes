<template>
<!-- v-if="item.id == route.params.id" -->
<div class="pt-4 md:pt-6">
    <!-- //options -->
    <div v-for="item in votes" class=" text-white" >
        
        <div class="flex flex-col gap-6 xl:gap-10 w-full px-[2%] lg:px-[8%]" v-if="item.id == route.params.id">
            
            <div v-if="item.options"  class="">
                <div v-for="(vote, i)  in item.options" :key="vote" class="text-[20px] flex flex-col gap-4 xl:gap-8">
                    <button @click="voteCollection(item.docId, i, vote.percent, item.totalVotes)" class="flex gap-2 items-center bg-[#dcfd1e10] border border-gray-700 rounded-lg w-full p-4" :id="i"  v-bind:id="i">
                        <i class="fa-regular fa-circle"></i>
                        <div class="flex justify-between w-full">
                            <div>{{vote.option}}</div>
                            <div>{{vote.percent}}%</div>
                        </div>
                    </button>
                    <div> 
                </div>
            </div>     
            <div class="text-sm lg:text-base font-medium text-gray-300">{{ item.totalVotes }} votes</div>
                
            </div>
            
        </div>
        
    </div>

</div>


</template>

<script setup>

import {ref, onMounted, onUnmounted, onBeforeUnmount} from 'vue'
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"
import { useRoute} from 'vue-router';
import db from '../main.js'
import { collection, onSnapshot, doc, query, updateDoc, increment, getDoc} from "firebase/firestore"; 
const route = useRoute();
const votes = ref([]);

const isLoggedIn = ref(false)

const auth = getAuth();

let usersName = []
let userIcons = []
let usersid = []


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
            // console.log(usersName)
            return usersName
            
            
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
  docId:doc.id
}));

});

// Unsubscribe from snapshot listener when component is unmounted
onUnmounted(unsubscribe);
});


const voteCollection = async (id, i, percent,total) => {
    try {
        const userId = usersid.value; // Get the current user's ID

        const voteDocRef = doc(db, 'Votes', id);
        const docSnapshot = await getDoc(voteDocRef);

        if (docSnapshot.exists()) {
            const voteData = docSnapshot.data();

            if (voteData.voters && voteData.voters.includes(userId)) {
                console.error("User has already voted for this item");
                return;
            }

            voteData.options[i].percent = ((percent + 1) / (total + 1)) * 100; // Calculate percentage
            voteData.totalVotes = total + 1;


            if (!voteData.voters) {
                voteData.voters = [userId];
            } else {
                voteData.voters.push(userId);
            }
            // Update the document in Firestore
            await updateDoc(voteDocRef, voteData);
            console.log("Vote option updated successfully");
        } else {
            console.error("Document does not exist");
        }
    } catch (error) {
        console.error("Error updating vote option:", error);
    }
};

// Add a new document with a generated id.




</script>








