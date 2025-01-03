<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
export default {
  created() {
    this.fetchPokemon()
  },
  data: () => {
    return {
      pokedox: {},
    }
  },
  methods: {
    async fetchPokemon() {
      this.pokedox = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => response.json());
    },
  },

}
</script>

<template>
  <h1>New App</h1>
  <pre>{{ pokedox }}</pre>
</template>

<style></style>
