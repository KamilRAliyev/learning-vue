<script setup>
import { reactive, defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Default title - USERS",
  },
});

const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

const state = reactive({
  userList: users,
});
</script>

<template>
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="user in state.userList" :key="`user-${user.id}`">
      {{ user.name }}: {{ user.website }}
    </li>
  </ul>
</template>
