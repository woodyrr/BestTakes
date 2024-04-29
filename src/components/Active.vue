<script setup>
import {ref, onMounted, onUnmounted, computed } from 'vue'
import db from '../main.js'
import { RouterLink } from 'vue-router'
import { collection, orderBy, onSnapshot, query } from "firebase/firestore"; 

const today = new Date();
const takes = ref([]);
const filteredTakes = computed(() => {
  return takes.value.filter(item => new Date(item.deadline) >= today);
});

// Function to format the date
const formatDate = (date) => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};



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

<template>

  <section class="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-6 xl:gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] items-start ">
    <div v-for="item in filteredTakes" :key="item.id"  class="w-full border rounded-lg border-green-700 hover:border-green-600 duration-200 skew-x-6 hover:skew-x-0 bg-[#19702713]">
        <router-link :to="/Take/ + item.id" class="flex flex-col gap-4 bg-[#161313] p-3 rounded-lg border border-gray-700 skew-x-4 translate-x-[-10px] translate-y-[-10px] duration-300 hover:translate-x-0 hover:translate-y-0 ">
          <div class="flex gap-2 items-center">
            <img :src="item.uicon" alt="" srcset="" class="w-8 rounded-full">
            <h2 class="text-sm">{{ item.user }}</h2>
          </div>
          <h2 class="text-[19px]">{{ item.title }}</h2>
          <div class="text-gray-400">
            Until {{ formatDate(item.deadline) }}
          </div>
        </router-link>
    </div>
  </section>

</template>

