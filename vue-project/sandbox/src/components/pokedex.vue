<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->
<script>
export default {
  async setup() {
    const pokedox = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => response.json());

    return {
      pokedox,
    }
  },
  created() {
    console.log(this.pokedox)
  },
}
</script>

<template>
  <h1>New App</h1>
  <pre>{{ pokedox }}</pre>
</template>
