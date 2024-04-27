<template>
    
      <!-- <section class="flex flex-col justify-start text-white gap-10 pt-10">
        <div class="flex items-center gap-2">
          <h2 class="takes text-orange-400">Active Takes</h2>
          <i class="fa-solid fa-bowling-ball text-gray-100 animate-spin xl:text-[18px]"></i>
        </div>
        <div class="flex items-center gap-2">
          <h2 class="takes text-green-400">Best Takes</h2>
          <i class="fa-solid fa-users-rays text-white animate-"></i>
        </div>
        <div class="flex items-center gap-2 ">
          <h2 class="takes text-red-400">Worst Takes</h2>
          <i class="fa-solid fa-face-grin-squint-tears text-gray-200"></i>
        </div>
        
      </section> -->

      <section class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] lg:px-[6%]">
        <div v-for="item in takes" :key="item.id">
          <div class="flex flex-col gap-4 bg-red-500 p-3 rounded-lg">
              <div class="flex gap-2 items-center">
                <img :src="item.uicon" alt="" srcset="" class="w-8 rounded-full">
                <h2 class="text-sm">{{ item.user }}</h2>
              </div>
              <h2>{{ item.title }}</h2>
              <div class="">
                {{ item.created }}
              </div>
              <div class="">
                {{ item.deadline }}
              </div>

              
            
          </div>
          
          <div> test</div>
        </div>
      </section>
    
</template>

<script setup>

import {ref, onMounted, onUnmounted } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 

const takes = ref([]);

onMounted(() => {
  const takeCollection = query(collection(db, 'Takes'), orderBy('date', 'desc'));
  const unsubscribe = onSnapshot(takeCollection, (snapshot) => {
    takes.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      description: doc.data().Description,
      title: doc.data().title,
      options: doc.data().options,
      deadline:doc.data().endDate,
      created: doc.data().date,
      uid:doc.data().uid,
      uicon:doc.data().uicon,
      user:doc.data().user
    }));
  });

  // Unsubscribe from snapshot listener when component is unmounted
  onUnmounted(unsubscribe);
});


</script>

<style>
.takes{
  color: --text2-color;
  font-size: 22px;
  
}
</style>

