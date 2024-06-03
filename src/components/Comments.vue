<template>
    <div class="w-full md:px-[5%] flex flex-col gap-3">
        <div class="text-white font-semibold text-base lg:text-lg 2xl:text-[26px]  pt-5 flex gap-2 items-center">
            <div class="">Comments</div>
            <i class="fa-regular fa-comment-dots "></i>
        </div>
        <section class="w-full border border-[#53494954] rounded-lg p-[4%] md:p-[5%] flex flex-col gap-4 md:gap-5 ">
            <input type="text" @keyup.enter="addComment" v-model = 'newComment' name="Name" placeholder="Comment..." class=" px-3 py-2 rounded-lg bg-[#5349492d] placeholder-[rgba(255,255,255,0.77)] outline ring-1 ring-[#26722dab] outline-0 outline-gray-100 w-full text-white text-xs sm:text-sm">
            <div v-for="item in comments">
                <div v-if="item.Routeid == route.params.id" class="">
                    <div class="flex items-center gap-2 lg:gap-3 border border-x-0 border-t-0 border-[#53494954] pb-2">
                        <img :src="item.uicon" alt="" srcset="" class="w-7 md:w-8 xl:w-10 rounded-full">
                        <div class="text-white">
                            <div class="flex items-center gap-1 text-yellow-200">
                                <div v-if="item.user" >
                                    <h2 class="text-sm">{{ item.user }}</h2>
                                </div>
                                <div class="text-sm" v-else>
                                    <h2 > {{ item.email.slice(0,10) }}</h2>
                                </div>
                                <div class="flex items-center text-xs text-gray-400">
                                    on {{ formatDate(item.date) }}
                                </div>
                            </div>
                            
                            <div class="text-gray-100">{{ item.comment }}</div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
           
        </section>
    </div>
</template>





<script setup>
import {ref, onMounted, onUnmounted, onBeforeUnmount} from 'vue'
import { useRoute, RouterLink, useRouter} from 'vue-router';
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"
import db from '../main.js'
import { collection, addDoc, getDocs, orderBy, onSnapshot, doc, deleteDoc, query } from "firebase/firestore"; 
import voting from "../components/Voting.vue"
import comment from "../components/Comments.vue"
import tests from "../components/test.vue"
const route = useRoute();

// const vote = ref(0);
const newComment = ref('');

// Authentication process stuff
const isLoggedIn = ref(false)
const router = useRouter()
const auth = getAuth();
const comments = ref([]);

//auth user personal info stored in arrays
let usersName = []
let userIcons = []
let usersid = []
let useremails = []

const formatDate = (date) => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

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

    const takeCollection = query(collection(db, 'Comments'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(takeCollection, (snapshot) => {
        comments.value = snapshot.docs.map((doc) => ({
        id: doc.data().id,
        Routeid:doc.data().Routeid,
        comment:doc.data().comment,
        uicon:doc.data().uicon,
        date: doc.data().date,
        user:doc.data().user,
        email:doc.data().email
        
        }));
        console.log(comments)
    });

    // Unsubscribe from snapshot listener when component is unmounted
    onUnmounted(unsubscribe);
})

const randomId = Math.floor(Math.random() * 1000000)

const addComment = () =>{
    addDoc(collection(db, 'Comments'),{
        id: randomId,
        Routeid:route.params.id,
        comment:newComment.value,
        uicon:userIcons.value,
        date: new Date(Date.now()).toLocaleString(),
        user:usersName.value,
        email:useremails.value
    });
    newComment.value = '';
}




</script>