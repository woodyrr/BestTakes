<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import { useRoute} from 'vue-router';
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 
import voting from "../components/Voting.vue"
import tests from "../components/test.vue"
const route = useRoute();

const vote = ref(0);

let usersName = []
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
// if (user) {
//     let names  = user.displayName
//     usersName.value = names
//     return usersName

// } else {
//     // User is signed out
//     // ...
// }
// });


const takes = ref([]);

onMounted(() => {
const takeCollection = query(collection(db, 'Takes'), orderBy('date', 'desc'));
const unsubscribe = onSnapshot(takeCollection, (snapshot) => {
takes.value = snapshot.docs.map((doc) => ({
  id: doc.data().id,
  description: doc.data().description,
  title: doc.data().title,
  options: doc.data().options,
  deadline:doc.data().endDate,
  created: doc.data().date,
  uid:doc.data().uid,
  uicon:doc.data().uicon,
  user:doc.data().user
  
}));

});
console.log(takes)

// Unsubscribe from snapshot listener when component is unmounted
onUnmounted(unsubscribe);
});

</script>

<style>
.takes{
  color: --text2-color;
  font-size: 24px;

}
</style>

<template>
    <div>
        
        <div class="text-white px-[2%] lg:px-[8%]">
            <div v-for="item in takes">
                <div v-if="item.id == route.params.id"  class="flex flex-col gap-3">
                    <div class="flex items-center gap-3">
                        <div class="rounded-full  border-green-500 border-2 w-8 lg:w-10">
                            <img :src="item.uicon" alt="" srcset="" class=" rounded-full">
                        </div>
                        <div class="text-xs lg:text-sm font-semibold">
                            {{ item.user }}
                            <!-- {{ item.uid }} -->
                        </div>
                    </div>

                    <div class="flex flex-col gap-2 w-full">
                        <div class="text-[28px] font-semibold text-blue-400">
                            {{ item.title }}
                        </div>
                        <!-- <div class="text-gray-400 lg:text-lg">
                            {{ item.description }}
                        </div> -->
                    </div>

                </div> 

            </div>
        </div>
        <voting />
    </div>
    <!-- <div class="pt-6">
        <div v-for="item in takes" class=" text-white">
        <div class="flex flex-col gap-2 w-full px-[2%] lg:px-[9%]" v-if="item.id == route.params.id">
            <div class="text-[24px] font-semibold">
                {{ item.title }}
            </div>
            <div>
                {{ item.description }}
            </div>
            <div>
                1 live on this vote channel
            </div>
            <div v-if="item.options"  class="flex gap-20 pt-20">
                <div class="flex flex-col gap-5 lg:gap-10">
                    <div v-for="option in item.options" :key="option" class="text-[20px]">
                        <button @click="" class="flex gap-2 items-center">
                            <i class="fa-regular fa-circle"></i>
                            {{ option }}
                        </button>
                        <div>
                    Total Votes: {{ vote }}
                </div>
                        
                    </div>
                </div>
                
                <div class="border"></div>
                
            </div>
        </div>
    </div>
    </div> -->
    
</template>