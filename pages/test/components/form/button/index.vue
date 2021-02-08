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
import { nButton } from '~/packages/naked-ui/src/main'

export default {
  layout: 'test',
  components: {
    nButton
  }
}
</script>
