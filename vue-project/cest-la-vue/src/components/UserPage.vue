<script>
import { reactive } from "vue";

export default {
  async setup() {
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());

    const state = reactive({
      users2: users,
    });

    // console.log(state);
    // console.log(state.users2);

    return {
      state,
    }
  },
  data: () => {
    return {
      users: {},
    };
  }
};
</script>

<template>
  <ul>
    <li v-for="user in state.users2" :key="`user-${user.id}`">
      {{ user.name }}: {{ user.website }}
    </li>
  </ul>
</template>
