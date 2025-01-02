<script>
export default {
  data() {
        return {
          message: "Hello, it works!",
          listOfNumbers: [1,2,3,4,5],
          count: 10,
          incrementAmount: 19,
          counterTitle: "Cool number"
        }
      },
      computed: {
        // Compute date is performance optimized calculations on reactive data
        // Vue nows when to run it.
        displayTitle() {
          if (this.count > 100){
            return "Cool number - very long."
          }
          else{
            return "Cool number"
          }
        },
        optimizedIncrementAmount(){
          return this.displayTitle.length * this.incrementAmount
        }

      },
      methods: {
        incrementCount(){
          this.count+=this.optimizedIncrementAmount
        },
        changeIncrementAmount(event){
          this.incrementAmount = event.target.value
        }
      },
      watch: {
        // it is good for when you need a side effect on your codebase.
        // Let's say when you need to make specific api call on specific state.
        // watch for triggering actions, computed data for computing reactive data
        count(newValue){
            if (newValue > 1000){
              this.counterTitle = "oof, your number is big"
            }
        }
    }
}
</script>

<template>
  <h2>{{displayTitle}}</h2>
      <p v-if="message.length%2 ==0">Even: {{message}}</p>
      <p v-else>Odd: {{message}}</p>
      <ul>
        <li v-for="number in listOfNumbers">{{number}}</li>
      </ul>
      <hr>
      <p>Count: {{count}}</p>
      <p>Increment Amount: {{incrementAmount}}</p>
      <p>Optimized Increment Amount: {{optimizedIncrementAmount}}</p>
      <button v-on:click="incrementCount">
        Increment Count
      </button>
      <hr>
      <div>
        <label for="incrementAmount">Increment by:</label>
        <input type="number" id="incrementAmount" v-model="incrementAmount">
      </div>
</template>