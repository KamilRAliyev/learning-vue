<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, reactive } from 'vue';
import CounterBase from './components/CounterBase.vue';
import UserCard from './components/userCard.vue';

const colorPreferred = ref("black");

const userr = reactive({
  name: "Aliye",
  favoriteFood: "kebab",
})
</script>

<template>
  <div class="wrapper">
    <h2>color: {{ colorPreferred }}</h2>
    <input type="color" v-model="colorPreferred">
    <CounterBase></CounterBase>
    <h2>
      <userCard :user="userr" />
    </h2>
  </div>
</template>

<style>
/* The Problem with vue is that it just injects it  globally for classic style, that's why we need style scoped */
html {
  background-color: papayawhip;
}

.wrapper {
  background-color: v-bind(colorPreferred);
}

button {
  border: 10px solid red;
}
</style>
