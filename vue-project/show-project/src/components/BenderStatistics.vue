<!-- eslint-disable vue/block-lang -->
<script>
export default {
  props: {
    'characters': {
      type: Array,
      required: true,
    },
  },
  computed: {
    uniqueElements() {
      return Array.from(
        new Set(
          this.characters.flatMap(character => character.element)
        )
      );
    },
    statistics() {
      const elementStatistics = this.uniqueElements.reduce((stats, element) => {
        stats[element] = this.characters.filter(character => character.element.includes(element)).length;
        return stats;
      }, {});

      return elementStatistics
    },
  },
}

</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <pre>{{ statistics }}</pre>
  </ul>

  {{ uniqueElements }}
</template>
