<template>
  <div id="viewport">
    <Nuxt />
    <ColorModeSwitch />
  </div>
</template>

<style lang="scss">
@import 'sxcss/reset';
@import '~/styles/fonts.css';

html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: $white;
  color: $black;
  overflow: hidden;
}

.color-mode-switch {
  position: fixed;
  right: 24px;
  bottom: 24px;
}

a {
  @include hover-effect;
}
</style>
