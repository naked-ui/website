<template>
  <div id="viewport">
    <Nuxt />
    <ColorModeSwitch />
  </div>
</template>

<style lang="scss">
@import 'sxcss/reset';
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap');
@import '~/styles/fonts.css';
@import '~/styles/color-mode.scss';

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
</style>
