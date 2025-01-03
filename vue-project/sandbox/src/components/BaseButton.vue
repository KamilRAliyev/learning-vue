<!-- eslint-disable vue/block-lang -->
<script>
export default {
  props: {
    text: String,
    icon: String,
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <button>
    <slot v-if="left">Default Value</slot>
    <slot v-else>Submit</slot>
  </button>
</template>
