<template>
<!-- v-if="item.id == route.params.id" -->
<div class="pt-4 md:pt-6">
    <div v-for="item in votes" class=" text-white" >
        
        <div class="flex flex-col gap-6 xl:gap-10 w-full px-[2%] lg:px-[8%]" v-if="item.id == route.params.id">

            <div class="text-gray-400 text-sm">
                1 live on this vote channel
            </div>
            
            <div v-if="item.options"  class="">
                <div v-for="option in item.options" :key="option" class="text-[20px] flex flex-col gap-4 xl:gap-8">
                    <div v-for="(vote, i) in option" class="w-full text-white">
                        <button @click="voteForOption(route.params.id, i)" class="flex gap-2 items-center bg-[#dcfd1e10] border border-gray-700 rounded-lg w-full p-4" :id="i"  v-bind:id="i">
                            <i class="fa-regular fa-circle"></i>
                            <div class="flex justify-between w-full">
                                <div>{{vote.option}}</div>
                                <div>{{vote.percent}}%</div>
                            </div>
                        </button>
                    </div>
                <div> 
            </div>
            </div>     
            <div class="text-sm lg:text-base font-medium text-gray-300">{{ item.options.totalVotes }} votes</div>
                
            </div>
            
        </div>
        
    </div>

</div>


</template>

<script setup>

import {ref, onMounted, onUnmounted, onBeforeUnmount} from 'vue'
import { useRoute} from 'vue-router';
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query, updateDoc , getDoc} from "firebase/firestore"; 
const route = useRoute();
const votes = ref([]);


onMounted(() => {
const voteCollection = query(collection(db, 'Votes'));
const unsubscribe = onSnapshot(voteCollection, (snapshot) => {
votes.value = snapshot.docs.map((doc) => ({
  options: doc.data().Vote,
  author:doc.data().author,
  id:doc.data().id
}));

});
console.log(votes)

// Unsubscribe from snapshot listener when component is unmounted
onUnmounted(unsubscribe);
});


// const voteCollection = ()=>{
//     // const docRef = query(collection(db, 'Votes'));
//     const docRef = doc(db, 'Votes',)
// }


const voteForOption = async (itemId, optionIndex) => {
    try {
        const itemRef =  doc(db, 'Votes', itemId)
        const itemSnapshot = await getDoc(itemRef);
        const itemData = itemSnapshot.data();

        console.log(itemSnapshot)


        
        
        
            await updateDoc(itemRef, itemData);
        
    } catch (error) {
        console.error('Error voting for option:', error);
    }
};


</script>








