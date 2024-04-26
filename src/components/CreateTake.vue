<script setup>
import {ref, onMounted, onUnmounted } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 


//list items to connect with v-modal
const newTake = ref('');
const Description = ref('');
const choices = ref("");
const EndDate = ref("");
const allChoices = ref([]);

//voting options section. Adding choices into allChoices Array.
const addChoice = () => {
    if(choices.value.length > 0){
        allChoices.value.push({
        options:choices.value
    })
    choices.value = '';
    return allChoices.value
    }
}


// pushing items into takes array, eventually firebase db
const Takes = ref([])
const mesure = ref([]);
const num = ref(0);
const recipes = ref([])
const addNote = () => {
    Takes.value.push({
        id: Math.floor(Math.random() * 1000000),
        title: newTake.value,
        date: new Date(),
        description:Description.value,
        options:allChoices.value,
        endDate:endDate.value
    })

    newTake.value = '';
    router.push("/home");
}


// const newlist = () => {
//   num.value++;
//   mesure.value.push({
//     measure: `measurement ${num.value}`,
//     ingredient: `ingredient ${num.value}`,
//   });
// };


// onMounted(async() => {
//     let recipeColection = await getDocs(collection(db, 'personal recipes'))
//     recipeColection.forEach((recipe) => {
//         recipes.value.push({...recipe.data(), id: recipe.id})
//         console.log(recipe.data(), recipe.id)
//     });
// })

</script>


<template>
    
    <div class=" w-full px-[14%] flex flex-col gap-7 text-[--text2-color] text-sm placeholder-[rgba(255,255,255,0.7)]">
        
        <div class="flex flex-col gap-2">
            <span class="text-base font-medium">Title</span>
            <input type="text" v-model = 'newTake' name="Name" placeholder="Your best take is..." class=" px-3 py-2 rounded-lg bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]">
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-base font-medium">Description</span>
            <input v-model = 'Description' name="note" id="note" cols="30" rows="2" class="rounded-lg p-3 bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)] py-3" placeholder="(optional) Take description..."></input>
        </div>
        <div class="flex flex-col gap-2">

            <div class="flex gap-1 flex-col">
                <span class="text-base font-medium">Voting Options</span>
                <div class="text-[rgba(255,255,255,0.7)] text-[13px]">You can not edit your vote option. Please double check 📌.</div>
            </div>

            <div v-for="(items , index) in allChoices" class="flex flex-col gap-1 font-semibold ">
                <div class="flex justify-between text-yellow-400 text-base">
                    <div>{{ items.options }}</div>
                    <i class="fa-regular fa-trash-can" @click="allChoices.splice(index, 1);"></i>
                </div>
            </div>
            
            <input @keyup.enter="addChoice" v-model = 'choices' name="note" id="note" cols="30" rows="2" class="rounded-lg p-3 bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]" placeholder="Press enter to add more options"></input>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-base font-medium">End date</span>
            <div class="flex rounded-lg justify-between items-center p-1 bg-[#5349492d] border border-[#53494954] duration-300 hover:bg-[#53494971]  hover:border-[#53494954] hover:text-[rgba(255,255,255,0.7)] px-2">
                <span class="text-[rgba(255,255,255,0.7)]">Pick a date</span>
                <input v-model = 'EndDate' type="date"  class="rounded-lg p-1 text-[17px] text-white bg-transparent  text-[rgba(255,255,255,0.7)]">
            </div>
        </div>

        <button class=" text-base w-full bg-green-500  border-none rounded-lg text-gray-900 cursor-pointer p-2 font-semibold">Create</button>
    </div>
    
</template>
<style>

</style>