<template>
  <div class="color-mode-switch">
    <LightMode
      class="color-mode-switch__icon"
      v-if="currentColorMode === 'light'"
    />
    <DarkMode
      class="color-mode-switch__icon"
      v-if="currentColorMode === 'dark'"
    />
  </div>
</template>

<script>
export default {
  computed: {
    currentColorMode () {
      return this.$colorMode.value
    }
  }
}
</script>

<style lang="scss" src="./ColorModeSwitch.scss" />
