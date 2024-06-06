<template>
    <div v-if="isLoggedIn">
        <create />
    </div>
</template>

<script setup>
import { RouterLink, useRouter,RouterView} from 'vue-router'
import create from '../components/CreateTake.vue'
import {ref, onMounted} from 'vue'
import {getAuth,GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth"

//profile/create/logout overlay
const overlay = ref(false)

// Authentication process stuff
const isLoggedIn = ref(false)
const router = useRouter()
const auth = getAuth();


//auth user personal info stored in arrays
let usersName = []
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
            return usersName
            
            
        }
        else{
            isLoggedIn.value = false;
        }
    })
})


//SignOut users and redirecting them afterwards.
const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/")
    })
};
</script>