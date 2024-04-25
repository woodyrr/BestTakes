<template>
    <header class="text-[--main-white] flex justify-between pt-14 px-[7%] ">
        <div class="flex gap-2 justify-center items-center">
            <RouterLink to="/" class="text-3xl font-bold">BestTakes</RouterLink>
            <i class="fa-regular fa-face-surprise text-red-400 text-lg duration-100 animate-bounce"></i>
        </div>
        <!-- font-family: PremierSans-Regular, Arial, Helvetica Neue, Helvetica, sans-serif; -->
        <button class="bg-transparent flex px-3 lg:px-5 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center border rounded-md 2xl:text-[17px]">
            <i class="fa-brands fa-github"></i>
            <h2>{{ username.value }}</h2>
        </button>
        
    </header>
</template>
<script setup>
import { RouterLink, useRouter} from 'vue-router'
import {ref, onMounted} from 'vue'
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"

const isLoggedIn = ref(false)
const router = useRouter()
const auth = getAuth();
let usersName = []
onMounted(() => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            let names  = user.displayName
            usersName.value = names
            // console.log(usersName)
            return usersName
            
            
        }
        else{
            isLoggedIn.value = false;
        }
    })
})
const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/")
    })
};

</script>