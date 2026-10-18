<script setup>
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <header>
    <NavMenu />
  </header>
  <main>
    <RouterView />
  </main>
</template>