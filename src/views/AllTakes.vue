<template>
    
      <!-- <section class="flex flex-col justify-start text-white gap-10 pt-10">
        <div class="flex items-center gap-2">
          <h2 class="takes text-orange-400">Active Takes</h2>
          <i class="fa-solid fa-bowling-ball text-gray-100 animate-spin xl:text-[18px]"></i>
        </div>
        <div class="flex items-center gap-2">
          <h2 class="takes text-green-400">Best Takes</h2>
          <i class="fa-solid fa-users-rays text-white animate-"></i>
        </div>
        <div class="flex items-center gap-2 ">
          <h2 class="takes text-red-400">Worst Takes</h2>
          <i class="fa-solid fa-face-grin-squint-tears text-gray-200"></i>
        </div>
        
      </section> -->
    
</template>
<script setup>

import {ref, onMounted} from 'vue'
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"
// , GithubAuthProvide
// const isLoggedIn = ref(false)
// const router = useRouter()
// const auth = getAuth();
// let usersName = []
// onMounted(() => {
    
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             isLoggedIn.value = true;
//             let names  = user.displayName
//             usersName.value = names
//             // console.log(usersName)
//             return usersName
            
            
//         }
//         else{
//             isLoggedIn.value = false;
//         }
//     })
// })
// const handleSignOut = () => {
//     signOut(auth).then(() => {
//         router.push("/")
//     })
// };

</script>

<style>
.takes{
  color: --text2-color;
  font-size: 22px;
  
}
</style>

