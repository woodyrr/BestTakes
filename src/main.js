import "./style.css";
import "./assets/base.css"
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkjxUiWC5qbLkxQfYY2N9-tXwq2U9n7FY",
    authDomain: "best-takes.firebaseapp.com",
    projectId: "best-takes",
    storageBucket: "best-takes.appspot.com",
    messagingSenderId: "371863040811",
    appId: "1:371863040811:web:3bfc5940946da0d71c4b6e"
};

const apps = initializeApp(firebaseConfig);
const db = getFirestore(apps);

const app = createApp(App)
// app.use(PrimeVue);
app.use(router)
app.use(MotionPlugin)
app.mount('#app')

export {apps};
export default db;
