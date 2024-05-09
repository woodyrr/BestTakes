<script setup>
import {ref, onMounted, onUnmounted } from 'vue'
import {useRouter} from 'vue-router'
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"


const isLoggedIn = ref(false)
const router = useRouter()
const auth = getAuth();


//auth user personal info stored in arrays
let usersName = []
let userIcons = []
let usersid = []
let useremails = []

onMounted(() => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            let names  = user.displayName
            let photo  = user.photoURL
            let id  = user.uid
            let email  = user.email
            usersName.value = names
            userIcons.value = photo
            usersid.value = id
            useremails.value = email
            // console.log(usersName)
            return usersName
            
            
        }
        else{
            isLoggedIn.value = false;
        }
    })
})

const randomId = Math.floor(Math.random() * 1000000)

//list items to connect with v-modal
const newTake = ref('');
const Description = ref('');
const choices = ref("");
const EndDate = ref("");
const allChoices = ref([]);

const addChoice = () => {
    if(choices.value.length > 0){
        allChoices.value.push({
            option:choices.value,
            percent:0
        }
        
    )
    choices.value = '';
    return allChoices.value
    }
}
// pushing items into takes array, eventually firebase db

const addTake = () => {
  addDoc(collection(db, 'Takes'), {
    id: randomId,
    title: newTake.value,
    description:Description.value,
    options:allChoices.value,
    endDate:EndDate.value,
    date: new Date(Date.now()).toLocaleString(),
    uid:usersid.value,
    uicon:userIcons.value,
    user:usersName.value,
    email:useremails.value
  });
    newTake.value = '';
    EndDate.value = '';
    allChoices.value = '';
    Description.value = '';
    router.push("/");
    
};

const votes = () => {
    // Ensure allChoices contains an array of strings
    const options = allChoices.value.map(choice => {
        if (typeof choice === 'string') {
            return { option: choice, percent: 0 };
        } else {
            return choice;
        }
    });

    addDoc(collection(db, 'Votes'), {
        author: {
            uid: usersid.value,
            profileImg: userIcons.value,
            name: usersName.value,
        },
        totalVotes:0,
        voters:[],
        options: options,
        title: newTake.value,
        id: randomId
    });
}
</script>


<template>
    
    <div class=" w-full px-[3%] md:px-[14%] flex flex-col gap-7 text-[--text2-color] text-sm placeholder-[rgba(255,255,255,0.7)]">
        
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
                    <div>{{ items.option }}</div>
                    <i class="fa-regular fa-trash-can" @click="allChoices.splice(index, 1);"></i>
                </div>
            </div>
            
            <input @keyup.enter="addChoice" v-model = 'choices' name="note" id="note" cols="30" rows="2" class="rounded-lg p-3 bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]" placeholder="Press enter to add more options" required></input>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-base font-medium">End date</span>
            <div class="flex rounded-lg justify-between items-center p-1 bg-[#5349492d] border border-[#53494954] duration-300 hover:bg-[#53494971]  hover:border-[#53494954] hover:text-[rgba(255,255,255,0.7)] px-2">
                <span class="text-[rgba(255,255,255,0.7)]">Pick a date</span>
                <input v-model = 'EndDate' type="date"  class="rounded-lg p-1 text-[17px] text-white bg-transparent  text-[rgba(255,255,255,0.7)]" required>
            </div>
        </div>

        <button @click=" votes(), addTake()" class=" text-base w-full bg-green-500  border-none rounded-lg text-gray-900 cursor-pointer p-2 font-semibold">Create</button>
    </div>
    
</template>
<style>

</style>
