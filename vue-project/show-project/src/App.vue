<!-- eslint-disable vue/block-lang -->
<script>
import BaseLayout from "./components/BaseLayout.vue";
import BenderStatistics from "./components/BenderStatistics.vue"
import CharacterCard from "./components/CharacterCard.vue";

export default {
  components: {
    BenderStatistics,
    CharacterCard,
    BaseLayout,
  },
  data: () => (
    {
      characterList: [
        {
          name: 'Kamil',
          element: ['air', 'water', 'fire']

        },
        {
          name: 'Limak',
          element: ['air', 'piss', "fire"]

        },
        {
          name: 'Test',
          element: ['fart', "water", 'fish', "fire"]

        }
      ],
      favoriteCharacters: [],
      newCharachter: {
        name: '',
        element: [],
      }
    }
  ),
  methods: {
    addToFavorite(payload) {
      if (!this.favoriteCharacters.includes(payload)) {
        this.favoriteCharacters.push(payload)
      }
      else {
        console.log('WARNING: Char is already in our favorites')
      }
    },
    addNewCharachter() {
      if (!this.favoriteCharacters.includes(this.newCharachter)) {
        this.characterList.push(this.newCharachter);
        this.newCharachter = { name: "", }
      }
    },
  },
}
</script>

<template>
  <base-layout>
    <template #one>
      <hr>
      <p>New Char adding form</p>
      <pre>{{ newCharachter }}</pre>

      <label for="newCharName">New Charachter Name </label>
      <input type="text" id="newCharName" v-model="newCharachter.name" @keyup.enter="addNewCharachter">
      <hr>
      <BenderStatistics :characters="characterList" />
    </template>
    <template #two>
      <p v-if="characterList.length === 0">There is no Charachter</p>
      <ul v-else>
        <li v-for="(char, id) in characterList" :key="`bender-${id}`">
          <CharacterCard :character="char" @favorite="addToFavorite" />
        </li>
      </ul>
      <hr>
      <p>Hey Your favorite Charachters</p>
      <ul>
        <li v-for="(char, id) in favoriteCharacters" :key="`character-${id}`">{{ char.name }}</li>
      </ul>
    </template>
  </base-layout>



</template>
