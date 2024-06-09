<script setup>
import {ref, onMounted, onUnmounted, computed } from 'vue'
import db from '../main.js'
import { RouterLink } from 'vue-router'
import { collection, orderBy, onSnapshot, query } from "firebase/firestore"; 

const today = new Date();
const takes = ref([]);
const filteredTakes = computed(() => {
  return takes.value.filter(item => new Date(item.deadline) < today);
});


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

// Unsubscribe from snapshot listener when component is unmounted
onUnmounted(unsubscribe);
});


</script>

<template>

  <section  class="">

    <div v-if="filteredTakes.length > 0" class="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-6 xl:gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] items-start">

      <div v-for="item in filteredTakes" :key="item.id"  class="w-full border rounded-lg border-red-700 md:hover:border-red-600 duration-200 md:skew-x-6 md:hover:skew-x-0 bg-[#7a1d1d10]">
          <router-link :to="/Take/ + item.id" class="flex flex-col gap-4 bg-[#161313] p-3 rounded-lg border border-gray-700 md:skew-x-4 md:translate-x-[-10px] md:translate-y-[-10px] duration-300 hover:translate-x-0 hover:translate-y-0 ">
            <div class="flex gap-2 items-center">
              <img :src="item.uicon" alt="" srcset="" class="w-8 rounded-full">
              <h2 class="text-sm">{{ item.user }}</h2>
            </div>
            <h2 class="text-[20px]">{{ item.title }}</h2>
            <div class="flex justify-start">
              <div class="bg-yellow-400 rounded-full text-black py-1 px-2 text-sm font-medium">
                  Expired
              </div>
            </div>
          </router-link>
      </div>

    </div>

    <div v-else class="text-white font-medium">
          No expired take yet 😅
    </div>
    
  </section>

</template>