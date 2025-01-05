<!-- eslint-disable vue/block-lang -->
<script setup>
import { reactive } from 'vue';
import CounterBase from './components/CounterBase.vue';
import UserCard from './components/userCard.vue';

const userr = reactive({
  name: "Aliye",
  favoriteFood: "kebab",
})
</script>

<template>
  <CounterBase></CounterBase>
  <h2>
    <userCard :user="userr" />
  </h2>
</template>

<style>
/* The Problem with vue is that it just injects it  globally for classic style, that's why we need style scoped */
html {
  background-color: papayawhip;
}

button {
  border: 10px solid red;
}
</style>
