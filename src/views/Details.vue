<script setup>
import {ref, onMounted, onUnmounted, onBeforeUnmount} from 'vue'
import { useRoute, RouterLink, useRouter} from 'vue-router';
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 
import voting from "../components/Voting.vue"
import comment from "../components/Comments.vue"
const route = useRoute();

// const vote = ref(0);

let usersName = []

// Authentication process stuff
const isLoggedIn = ref(false)
const router = useRouter()
const auth = getAuth();
const takes = ref([]);

//auth user personal info stored in arrays
let userIcons = []

//retrieveing users data by popup
const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        displayNames()
        router.push("/home")
    })
    .catch((error) => {

    })
};


//on/preload fill in users data into specified place
onMounted(() => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            let names  = user.displayName
            let photo  = user.photoURL
            usersName.value = names
            userIcons.value = photo
            // console.log(usersName)
            // return usersName
        }
        else{
            isLoggedIn.value = false;
        }
    })

    const today = new Date();
    const formatDate = (date) => {
        const deadline = new Date(date);
        const difference = deadline - today;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        if(days < 0 || hours < 0 || minutes < 0 ){
            return `${0}d: ${0}h: ${0}m`
        }
        else{
            return `${days}d: ${hours}h: ${minutes}m`;
        }
    };

    

// onMounted(() => {
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
        user:doc.data().user,
        email:doc.data().email,
        remainingTime: formatDate(doc.data().endDate)
        
        }));

    });

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
    <div v-if="isLoggedIn" class="sm:px-[1%] lg:px-[7%]">
        <div class="grid md:grid-cols-2 gap-2 ">
            <div class="flex flex-col">
                <div class="text-white ">
                    <div v-for="item in takes">
                        <div v-if="item.id == route.params.id"  class="flex flex-col gap-3">

                            <div class="flex flex-col gap-2 w-full">
                                <div class="text-[28px] font-semibold text-gray-100">
                                    {{ item.title }}
                                </div>
                                <div class="text-gray-400 text-sm lg:text-base">
                                    {{ item.description }}
                                </div>
                                <div class="text-gray-400 flex gap-2 items-center text-lg">
                                    <i class="fa-solid fa-clock-rotate-left text-green-400"></i>
                                    {{ item.remainingTime }} 
                                </div>
                                
                            </div>

                        </div> 

                    </div>
                </div>
                <voting />
            </div>
            <div class="flex items-center">
                <comment />
            </div>
            
        </div> 
    </div>

    <div v-else class="text-white flex flex-col gap-24 px-[2%] lg:px-[8%]">
        <div class="text-white ">
            <div v-for="item in takes">
                <div v-if="item.id == route.params.id"  class="flex flex-col gap-3">
                    <div class="text-[28px] font-semibold text-yellow-400">
                            {{ item.title }}
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full border border-gray-300 border-dashed rounded-sm h-[40vh] flex flex-col gap-5 justify-center items-center">
            <div class="text-3xl font-bold">Login to vote</div>
            <button @click="signInWithGithub" class="bg-purple-900 flex px-3 lg:px-5 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center rounded-md 2xl:text-[17px]">
                <i class="fa-brands fa-github"></i>
                <h2>Login with Github</h2>
            </button>
        </div>
    </div>
    
</template>