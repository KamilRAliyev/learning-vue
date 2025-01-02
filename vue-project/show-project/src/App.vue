<!-- eslint-disable vue/block-lang -->
<script>
export default {
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
  computed: {
    uniqueElements() {
      return Array.from(
        new Set(
          this.characterList.flatMap(character => character.element)
        )
      );
    },
    statistics() {
      const elementStatistics = this.uniqueElements.reduce((stats, element) => {
        stats[element] = this.characterList.filter(character => character.element.includes(element)).length;
        return stats;
      }, {});

      return elementStatistics
    },
    airList() {
      return this.characterList.filter(char => char.element.includes('air')).length
    },
    fireList() {
      return this.characterList.filter(char => char.element.includes('fire')).length
    },

    waterList() {
      return this.characterList.filter(char => char.element.includes('water')).length
    },

  },
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
  <h2>Statistics</h2>
  <ul>
    <pre>{{ statistics }}</pre>
  </ul>

  {{ uniqueElements }}
</template>
