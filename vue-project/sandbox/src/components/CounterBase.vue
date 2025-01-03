<!-- eslint-disable vue/block-lang -->
<script>
import { newCount } from '../composables/countStore'

export default {
  setup() {
    return {
      newCount
    }
  },
  data() {
    return {
      count: 10,
      incrementAmount: 19,
      counterTitle: "Cool number",
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 100) {
        return "Cool number - very long."
      }
      else {
        return "Cool number"
      }
    },
    optimizedIncrementAmount() {
      return this.displayTitle.length * this.incrementAmount
    }

  },
  methods: {
    incrementCount() {
      this.count += this.optimizedIncrementAmount
      this.newCount += this.optimizedIncrementAmount
    },
    changeIncrementAmount(event) {
      this.incrementAmount = event.target.value
    }
  }
}
</script>

<template>
  <h2>{{ displayTitle }}</h2>
  <hr>
  <p>Count: {{ count }}</p>
  <p>{{ newCount }}</p>
  <p>Increment Amount: {{ incrementAmount }}</p>
  <p>Optimized Increment Amount: {{ optimizedIncrementAmount }}</p>
  <button v-on:click="incrementCount">
    Increment Count
  </button>
  <hr>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input type="number" id="incrementAmount" v-model="incrementAmount">
  </div>
</template>
