<template>
  <nuxt-link
    to="/"
    class="logo"
    :style="
      `
        --logo-size: ${size}${unit};
        --logo-letter-spacing: ${logoLetterSpacing}${unit};
      `
    "
    data-font-size="64px"
    data-line-height="64px"
    data-letter-spacing="-2px"
  >
    Naked UI
  </nuxt-link>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 64,
    },
    unit: {
      type: String,
      default: 'px',
    }
  },
  computed: {
    logoLetterSpacing () {
      return this.size / 36 * -1
    }
  }
}
</script>

<style lang="scss" src="./Logo.scss" />
