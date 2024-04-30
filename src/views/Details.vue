<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import { useRoute} from 'vue-router';
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 
const route = useRoute();

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
        <div v-for="item in takes" class=" text-white">
        <div class="flex flex-col  w-full px-[2%] lg:px-[9%]" v-if="item.id == route.params.id">
            <div class="text-[24px] font-semibold">
                {{ item.title }}
            </div>
            <div>
                {{ item.description }}
            </div>

            <div v-if="item.options">
                <!-- <div v-for="option in Object.values(item.options)" :key="option">
                    {{ option }}
                </div> -->
                <div v-for="option in item.options" :key="option">
            {{ option }}
          </div>
            </div>
        </div>
    </div>
    </div>
    
</template>