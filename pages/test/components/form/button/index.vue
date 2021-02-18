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
import { nButton } from '@naked-ui/vue'
// import { nButton } from '~/packages/@naked-ui/vue/src/main.js'

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

[data-name-prefix="nui"] {

  &.button {
    @include hover-effect($opacity: .36);
    padding: 16px 24px;
    font-size: 18px;
  }

  &.button--primary {
    background-color: var(--nui-color-primary);

    .button__text {
      color: var(--nui-color-white);
    }
  }

  &.button--secondary {
    background-color: var(--nui-color-secondary);

    .button__text {
      color: var(--nui-color-black);
    }
  }
}

</style>