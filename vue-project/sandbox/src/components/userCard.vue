<!-- eslint-disable vue/block-lang -->
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <h1>User: {{ user.name }} </h1>
  <p>Favorite Food: {{ user.favoriteFood }} </p>
</template>
