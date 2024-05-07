<template>
<!-- v-if="item.id == route.params.id" -->
<div class="pt-6">
    <div v-for="item in votes" class=" text-white" >
        
        <div class="flex flex-col gap-6 lg:gap-10 w-full px-[2%] lg:px-[8%]" v-if="item.id == route.params.id">
            <!-- <div class="flex items-center gap-3">
                <div class="rounded-full  border-green-500 border-2 w-8">
                    <img :src="item.author.profileImg" alt="" srcset="" class=" rounded-full">
                </div>
                <div class="text-xs font-semibold">
                    {{ item.author.name }}
                    
                </div>
            </div> -->

            <div class="text-gray-400">
                1 live on this vote channel
            </div>
            
            <div v-if="item.options"  class="">
                <div v-for="option in item.options" :key="option" class="text-[20px] flex flex-col gap-8 lg:gap-8">
                    <div v-for="(vote, i) in option" class="w-full text-white">
                        <button @click="" class="flex gap-2 items-center bg-[#dcfd1e10] border border-gray-700 rounded-lg w-full p-4" :id="i">
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

import {ref, onMounted, onUnmounted} from 'vue'
import { useRoute} from 'vue-router';
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 
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


</script>








