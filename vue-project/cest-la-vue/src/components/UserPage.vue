<script>
export default {
  data: () => {
    return {
      users: {},
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="user in users" :key="`user-${user.id}`">
      {{ user.name }}: {{ user.website }}
    </li>
  </ul>
</template>
