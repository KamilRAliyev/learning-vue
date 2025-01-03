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
