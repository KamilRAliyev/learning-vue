<!-- eslint-disable vue/block-lang -->
<script>
import CounterBase from './components/CounterBase.vue';
import userCard from './components/userCard.vue';

export default {
  components: {
    CounterBase,
    userCard,
  },
  data() {
    return {
      message: "Hello, it works!",
      listOfNumbers: [1, 2, 3, 4, 5],
      userData: {
        name: 'Kamil',
        preferredFramowork: 'Vue',
        favoriteFood: 'kebab',
        favoriteNumbers: [9, 2, 1, 4],
      }
    }
  },
  computed: {
    // Compute date is performance optimized calculations on reactive data
    // Vue nows when to run it.

  },
  methods: {
    changeName(newName) {
      this.userData.name = "Charlie";
    },
  },
}
</script>

<template>
  <p v-if="message.length % 2 == 0">Even: {{ message }}</p>
  <p v-else>Odd: {{ message }}</p>
  <ul>
    <li v-for="(number, id) in listOfNumbers" :key="`number-${id}`">{{ number }}</li>
  </ul>
  <hr>
  <counter-base />
  <hr>
  <user-card :user="userData" @change-name="changeName" />
</template>
