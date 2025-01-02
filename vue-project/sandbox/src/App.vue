<!-- eslint-disable vue/block-lang -->
<script>
import CounterBase from './components/CounterBase.vue';

export default {
  components: {
    CounterBase,
  },
  data() {
    return {
      message: "Hello, it works!",
      listOfNumbers: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    // Compute date is performance optimized calculations on reactive data
    // Vue nows when to run it.

  },
  methods: {

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
</template>
