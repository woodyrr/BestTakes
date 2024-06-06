<template >
  <div class="flex flex-col gap-8 lg:px-[7%]">
    
    <div class="flex flex-col gap-10">
      <div class="flex items-center gap-2">
        <h2 class="text-green-400 takes font-medium">Active Takes</h2>
        <i class="fa-solid fa-bowling-ball text-gray-100 animate-spin xl:text-[18px]"></i>
      </div>
      <active />
    </div>

    <div class="flex flex-col gap-10">
      <div class="flex items-center gap-2">
        <h2 class="text-red-400 takes font-medium">Past Takes</h2>
        <i class="fa-regular fa-clock  text-gray-100 animate-pulse xl:text-[18px]"></i>
      </div>
      <past />
    </div>

  </div>
</template>


<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import active from '../components/Active.vue'
import past from '../components/Past.vue'
import db from '../main.js'
import { collection, orderBy, onSnapshot, query } from "firebase/firestore"; 

const takes = ref([]);

onMounted(() => {
const takeCollection = query(collection(db, 'Takes'), orderBy('date', 'desc'));
const unsubscribe = onSnapshot(takeCollection, (snapshot) => {
takes.value = snapshot.docs.map((doc) => ({
  id: doc.data().id,
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
// console.log(takes)

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


