<script setup>
import { defineProps } from "vue";
import {userList} from '../composables/useUserStore'

defineProps({
  title: {
    type: String,
    default: "Default title - USERS",
  },
});

userList.value = await fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);
</script>

<template>
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="user in state.userList" :key="`user-${user.id}`">
      {{ user.name }}: {{ user.website }}
    </li>
  </ul>
</template>
