<script setup>
import Particles from "./components/Particles.vue";
import Sidebar from "./components/Sidebar.vue";
import { useUiHelper } from "./composables/useUiHelper";
import HelloWorld from "./components/HelloWorld.vue";

const {currentPage} = useUiHelper();
</script>

<template>
  <div>
    <Particles v-if="currentPage == 'Particles'" />
    <HelloWorld v-if="currentPage == 'HelloWorld'" />
    <Sidebar />
  </div>
</template>

<style>
</style>
