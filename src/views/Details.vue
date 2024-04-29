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
    <div v-for="item in takes" class="px-[4%] text-white">
        <div class="flex flex-col gap-10 w-full sm:px-[18%] 2xl:px-[25%]"  v-if="item.id == route.params.id">
            {{ item.title }}
        </div>
    </div>
</template>