<!-- eslint-disable vue/block-lang -->
<script>
import Pokedex from './components/pokedex.vue';

export default {
  components: {
    Pokedex,
  }
}
</script>

<template>
  <Suspense>
    <Pokedex></Pokedex>

    <template #fallback>Loading...</template>
  </Suspense>
</template>

<style></style>
