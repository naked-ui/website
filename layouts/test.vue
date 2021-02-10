<template>
  <div id="viewport" class="test-page">
    <Nuxt />
    <ColorModeSwitch />
  </div>
</template>

<style lang="scss">
@import '~/styles/main.scss';

.test-page {
  background-color: var(--nui-color-secondary);
  padding: 24px;

  &__inner {
    background-color: var(--nui-color-white);
    min-height: calc(100vh - 48px);
  }

  &__heading {
    padding: 16px 0 0 16px;
    margin-bottom: 16px;
  }

  &__content {
    padding-bottom: 16px;
  }
}
</style>
