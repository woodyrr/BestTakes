<template>
    <header class="text-[--main-white] flex justify-between pt-14 px-[7%] ">
        <div class="flex gap-2 justify-center items-center">
            <RouterLink to="/" class="text-3xl font-bold">BestTakes</RouterLink>
            <i class="fa-regular fa-face-surprise text-red-400 text-lg duration-100 animate-bounce"></i>
        </div>
        <!-- font-family: PremierSans-Regular, Arial, Helvetica Neue, Helvetica, sans-serif; -->
        <button class="bg-transparent flex px-3 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center border rounded-md 2xl:text-[17px]">
            <i class="fa-brands fa-github"></i>
            <h2>Login</h2>
        </button>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>