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
