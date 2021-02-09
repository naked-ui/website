<template>
  <article class="test-page__inner">
    <header class="test-page__heading">
      <h1>Button</h1>
    </header>
    <section class="test-page__content">
      <nButton>
        Button text
      </nButton>
    </section>
  </article>
</template>

<script>
// import { nButton } from '@naked-ui/vue'
import { nButton } from '~/packages/@naked-ui/vue/src/main.js'

export default {
  layout: 'test',
  components: {
    nButton
  }
}
</script>

<style lang="scss">
.test-page {

  &__content {
    padding: 16px;
  }
}
</style>