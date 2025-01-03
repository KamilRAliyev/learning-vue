<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->
<script>
import { ref } from 'vue';

export default {
  async setup() {
    const regionName = ref('keln');
    const pokedox = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => response.json());

    return {
      pokedox, regionName
    }
  },
  methods: {
    changeRegionName() {
      this.regionName = "Hoenn"
    }
  },
  created() {
    console.log(this.pokedox)
  },
}
</script>

<template>
  <h1>{{ regionName }}</h1>
  <button @click="changeRegionName">Change Region Name</button>
  <h1>New App</h1>
  <pre>{{ pokedox }}</pre>
</template>
