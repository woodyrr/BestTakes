<!-- <script setup>
import {ref, onMounted, onUnmounted } from 'vue'
import db from'../firebase.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 

const showModal = ref(false)
const newNote = ref('')
const notes = ref([])
const mesure = ref([]);
const num = ref(0);
const recipes = ref([])
const addNote = () => {
    notes.value.push({
        id: Math.floor(Math.random() * 1000000),
        text: newNote.value,
        date: new Date(),
    })
    showModal.value = false;
    newNote.value = ''
}

const newlist = () => {
  num.value++;
  mesure.value.push({
    measure: `measurement ${num.value}`,
    ingredient: `ingredient ${num.value}`,
  });
};


onMounted(async() => {
    let recipeColection = await getDocs(collection(db, 'personal recipes'))
    recipeColection.forEach((recipe) => {
        recipes.value.push({...recipe.data(), id: recipe.id})
        console.log(recipe.data(), recipe.id)
    });
})

</script> -->


<template>
    <!-- <span data-radix-focus-guard="" tabindex="0" style="outline: none; opacity: 0; position: fixed; pointer-events: none;"></span> -->
    <div class=" w-full px-[14%] flex flex-col gap-7 text-[--text2-color] text-sm placeholder-[rgba(255,255,255,0.7)]">
        <div class="flex flex-col gap-2">
            <span class="text-base font-medium">Title</span>
            <input type="text" name="Name" placeholder="Your best take is..." class=" px-3 py-2 rounded-lg bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]">
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-base font-medium">Description</span>
            <textarea name="note" id="note" cols="30" rows="2" class="rounded-lg p-3 bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]" placeholder="(optional) Take description..."></textarea>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex gap-1 flex-col">
                <span class="text-base font-medium">Voting Options</span>
                <div class="text-[rgba(255,255,255,0.7)] text-[13px]">You can not edit your vote option. Please double check 📌.</div>
            </div>
            
            <input name="note" id="note" cols="30" rows="2" class="rounded-lg p-3 bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]" placeholder="Press enter to add more options"></input>
        </div>
        
    
        
        <div class="flex flex-col gap-2">
            <span class="text-base font-medium">End date</span>
            <div class="flex rounded-lg justify-between items-center p-1 bg-[#5349492d] border border-[#53494954] duration-300 hover:bg-[#53494971]  hover:border-[#53494954] hover:text-[rgba(255,255,255,0.7)] px-2">
                <span class="text-[rgba(255,255,255,0.7)]">Pick a date</span>
                <input type="date"  class="rounded-lg p-1 text-[17px] text-white bg-transparent  text-[rgba(255,255,255,0.7)]">
            </div>
            
        </div>

        <button class=" text-base w-full bg-green-500  border-none rounded-lg text-gray-900 cursor-pointer p-2 font-semibold">Create</button>
    </div>

    
    <!-- <div class="max-w-[1000px] p-[10px] mt-0 mx-auto">
        <div class="mt-6 flex flex-wrap" >
            <div v-for="note in notes"
                :key="note.id" class="w-[225px] h-[225px] p-[10px] rounded-2xl bg-gray-200 flex flex-col justify-between mr-[20px] mb-[20px] text-black" :style="{backgroundColor: note.bg}">
                <p class="main-text">{{ note.text }}</p>
                <p class="date text-sm font-bold">{{ note.date.toLocaleDateString("en-US") }}</p>
            </div>
        </div>
    </div> -->
    
</template>
<style>

</style>