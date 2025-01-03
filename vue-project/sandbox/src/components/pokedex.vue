<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->
<script>
import { computed, ref, reactive } from 'vue';
// Reactive is, think of data{} option from options api, packed in a nice helper function
// What if I want to call data state{}?

export default {
  async setup() {
    const regionName = ref('Keln');
    const pokedox = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => response.json());

    const state = reactive({
      elementType: 'lightning',
    })

    const regionNameAllCaps = computed(() => { return state.elementType.toUpperCase() })
    console.log(state)
    return {
      pokedox, regionName, regionNameAllCaps
    }
  },
  computed: {
    regionNameLowerCase() {
      return this.regionName.toLowerCase()
    },
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
  <h3>{{ regionNameLowerCase }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <h1>New App</h1>
  <pre>{{ pokedox }}</pre>
</template>
