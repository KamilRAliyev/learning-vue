<!-- eslint-disable vue/block-lang -->
<script>
import { newCount } from '../composables/countStore'

export default {
  setup() {
    return {
      newCount
    }
  },
  props: { //For sending things down from parent
    user: {
      type: Object,
      required: true
    }
  },
  emits: [//For sending events up from child
    'change-name',
  ]
}
</script>

<template>
  <p>{{ newCount }}</p>
  <h1>User: {{ user.name }} </h1>
  <p>Favorite Food: {{ user.favoriteFood }} </p>
  <button @click="$emit('change-name')">Change Name</button>
</template>


<style scoped>
/* Scoped css are looking for element unique attribute([data-v-b3321]) and change CSS by it
They are not perferct though, cascade effect of CSS !important for example
*/
button {
  border: 10px green solid;
}
</style>
