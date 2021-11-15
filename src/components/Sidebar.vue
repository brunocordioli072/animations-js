<script setup>
import { useUiHelper } from "../composables/useUiHelper";
const { pages, changeCurrentPage } = useUiHelper();

const handleClick = (e) => {
    changeCurrentPage(e.target.innerText)
}
</script>

<template>
  <ul class="list" @click="handleClick">
    <li v-for="page in pages" :key="page">
      <button class="button">{{ page }}</button>
    </li>
  </ul>
</template>

<style>
.list {
  list-style: none;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 20px;
}
.button {
  margin: 10px 0 0 0;
}
</style>
