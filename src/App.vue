<template>
  <section class="flex flex-col gap-8 w-full">
    <top />
    <router-view />
  </section>
  
</template>

<script setup>
// @import 'base';
import { RouterView, RouterLink } from 'vue-router'
import top from './components/Header.vue'
import home from './views/AllTakes.vue'
</script>
