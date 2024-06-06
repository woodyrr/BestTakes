import {getAuth, onAuthStateChanged} from "firebase/auth";
import {ref, onMounted} from 'vue'

const isLoggedIn = ref(false)
const auth = getAuth();

//auth user personal info stored in arrays
let usersName = []
let userIcons = []
let usersid = []

onMounted(() => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            let names  = user.displayName
            let photo  = user.photoURL
            let id  = user.uid
            usersName.value = names
            userIcons.value = photo
            usersid.value = id
            // console.log(usersName)
            return usersName
            
            
        }
        else{
            isLoggedIn.value = false;
        }
    })
})

export default isLoggedIn