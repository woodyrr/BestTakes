<template>

    <header class="text-[--main-white] flex justify-between pt-8 md:pt-14 sm:px-[1%] lg:px-[7%] ">

        <div class="flex gap-2 justify-center items-center">
            <RouterLink to="/" class="text-3xl font-bold">BestTakes</RouterLink>
            <i class="fa-regular fa-face-surprise text-yellow-400 text-lg duration-100 animate-bounce"></i>
        </div>

        <button @click="overlay = !overlay " v-if="isLoggedIn" class="rounded-full  border-green-500 border-2">
            <img :src="userIcons.value" alt="" srcset="" class="w-14 rounded-full">
        </button>

        <button v-else="!isLoggedIn" @click="signInWithGithub" class="bg-transparent flex px-3 lg:px-5 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center border rounded-md 2xl:text-[17px]">
            <i class="fa-brands fa-github"></i>
            <h2>Login</h2>
        </button>

        <!-- profile/create/logout overlay -->
        <transition name="nav" class="right-0 mt-16 px-[17%] z-10" v-motion-slide-top >
            <div v-if="overlay"  class="fixed  opacity">
                <div class="bg-[rgba(22,20,22,255)] border border-[#53494954] p-2 flex flex-col gap-2 w-64 rounded-lg text-base font-medium text-[--text2-color]">
        
                    <!-- <RouterLink to="/create" @click="overlay = !overlay" class="flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md">
                        <div class="text-[--text2-color]">Profile</div>
                        <i class="fa-solid fa-gear text-[#999595]"></i>
                    </RouterLink> -->

                    <RouterLink to="/create" @click="overlay = !overlay" class="flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md">
                        <div>Create</div>
                        <i class="fa-solid fa-plus text-[#999595]"></i>
                    </RouterLink>
                    
                    <div class="flex flex-col gap-2">
                        <div class="border border-[#53494954]"></div>

                        <button v-if="isLoggedIn" to="/create" @click="handleSignOut(), overlay = !overlay" class="flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md">
                            <div>Logout</div>
                            <i class="fa-solid fa-unlock text-[#999595]"></i>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
        <!-- v-motion :initial="{opacity:0 }" :visible="{opacity:1, animationDuration:2}" -->
    </header>
</template>


<script setup>
import { RouterLink, useRouter} from 'vue-router'
import {ref, onMounted} from 'vue'
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithRedirect} from "firebase/auth"

//profile/create/logout overlay
const overlay = ref(false)


// Authentication process stuff
const isLoggedIn = ref(false)
const router = useRouter()
const auth = getAuth();

let usersName = []
let userIcons = []

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
})





// const signInWithGithub = () => {
//     const provider = new GithubAuthProvider();
//     if (isMobileDevice()) {
//         signInWithRedirect(auth, provider);
//     } else {
//         signInWithPopup(auth, provider);
//     }
// };

// const signInWithGithub = async () => {
//     const provider = new GithubAuthProvider();
//     if (isMobileDevice()) {
//         await signInWithRedirect(auth, provider);
//     } else {
//         await signInWithPopup(auth, provider);
//     }
// };
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
// const isMobileDevice = () => {
//     const userAgent = navigator.userAgent.toLowerCase();
//     return /android|iphone|ipad|ipod/.test(userAgent);
// };

//SignOut users and redirecting them afterwards.
const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/")
    })
};
</script>


<style>
/* profile/create/logout overlay Animation */
.nav-enter-from {
  opacity: 0;
  transition: visibility 1s, opacity 0.5s ease-out ;
}

.nav-enter-to {
  opacity: 1;
}
.nav-enter-active {
  transition: all transform 0.4s ease-out, visibility 2s;
}
</style>