<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->
<script>
import { computed, ref } from 'vue';

export default {
  async setup() {
    const regionName = ref('keln');
    const regionNameAllCaps = computed(() => { return regionName.value.toUpperCase() })
    const pokedox = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => response.json());

    console.log(regionName)
    return {
      pokedox, regionName, regionNameAllCaps
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
  <h3>{{ regionNameAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <h1>New App</h1>
  <pre>{{ pokedox }}</pre>
</template>
