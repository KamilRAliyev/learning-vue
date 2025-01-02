<!-- eslint-disable vue/block-lang -->
<script>
import BenderStatistics from "./components/BenderStatistics.vue"
export default {
  components: {
    BenderStatistics,
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
    addToFavorite(char) {
      if (!this.favoriteCharacters.includes(char)) {
        this.favoriteCharacters.push(char)
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
  <p v-if="characterList.length === 0">There is no Charachter</p>
  <ul v-else>
    <li v-for="(char, id) in characterList" :key="`bender-${id}`">{{ char.name }} <button
        @click="addToFavorite(char)">Add to
        favorite</button>
    </li>
  </ul>
  <hr>
  <p>Hey Your favorite Charachters</p>
  <ul>
    <li v-for="(char, id) in favoriteCharacters" :key="`character-${id}`">{{ char.name }}</li>
  </ul>
  <hr>
  <p>New Char adding form</p>
  <pre>{{ newCharachter }}</pre>

  <label for="newCharName">New Charachter Name </label>
  <input type="text" id="newCharName" v-model="newCharachter.name" @keyup.enter="addNewCharachter">
  <hr>
  <BenderStatistics :characters="characterList" />

</template>
