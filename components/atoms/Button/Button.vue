<template>
  <nButton
    :kind="kind"
    :size="size"
    :link="link"
  >
    <slot />
  </nButton>
</template>

<script>
// import { nButton } from '@naked-ui/vue'
import { nButton } from '~/packages/@naked-ui/vue/src/main.js'

export default {
  name: 'Button',
  components: {
    nButton
  },
  props: {
    kind: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'regular'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '',
      required: false
    }
  },
}
</script>

<style lang="scss" src="./Button.scss" />
