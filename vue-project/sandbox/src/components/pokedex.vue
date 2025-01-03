<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->
<script setup>
import { computed, ref, reactive, defineProps, defineEmits, onBeforeUnmount } from 'vue';
import BaseButton from './BaseButton.vue';
// Reactive is, think of data{} option from options api, packed in a nice helper function
// What if I want to call data state{}?
const regionName = ref('Keln');
const emits = defineEmits(['change-region'])
const pokedox = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => response.json());

const state = reactive({
  elementType: 'lightning',
});

const regionNameAllCaps = computed(() => { return state.elementType.toUpperCase() });

const changeRegionName = () => {
  regionName.value = "Hoenn"
  emits('change-region');
};

const props = defineProps(
  {
    region: {
      type: String,
      default: "Kanto",
    },
  }
);

const elementTypeAllCaps = computed(() => { return state.elementType.toUpperCase() + props.region })

onBeforeUnmount(() => {
  console.log("Do it.")
})
</script>

<template>
  <h3>{{ elementTypeAllCaps }}</h3>
  <h1>{{ regionName }}</h1>
  <h3>{{ regionNameAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <h1>New App</h1>
  <pre>{{ pokedox }}</pre>
  <base-button left="true"></base-button>
</template>
