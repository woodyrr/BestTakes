<template>
  <!-- <div class="text-green-700 text-2xl bg-zinc-800">Hello, from TailwindCSS!  </div> -->
  <section class="flex flex-col gap-8">
    <top />
    <router-view />
  </section>
  
</template>

<script setup>
// @import 'base';
import { RouterView, RouterLink } from 'vue-router'
import top from './components/Header.vue'
// import top from './components/header2.vue'
import home from './views/AllTakes.vue'
</script>
