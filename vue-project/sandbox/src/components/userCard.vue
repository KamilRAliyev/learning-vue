<!-- eslint-disable vue/block-lang -->
<script>
export default {
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
  <h1>User: {{ user.name }} </h1>
  <p>Favorite Food: {{ user.favoriteFood }} </p>
  <button @click="$emit('change-name')">Change Name</button>
</template>
