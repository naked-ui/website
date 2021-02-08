<template>
  <div
    :data-name-prefix="namePrefix"
    :style="` --name-prefix: ${namePrefix};`"
    :class="componentClasses"
    :paginationEnabled="paginationEnabled"
  >
    <div class="carousel__viewport-wrapper">
      <div class="carousel__viewport">
        <slot />
      </div>
    </div>
    <aside
      v-if="paginationIsAvailable && paginationEnabled"
      class="carousel__pagination"
    >
      <ol class="carousel__pagination-list">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          class="carousel__pagination-item">
          <a
            :href="`#${refName}--${index + 1}`"
            class="carousel__pagination-button"
          >Go to slide {{ index }}</a>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script>
import carouselNavigation from './logic/carouselNavigation'
import namePrefixMixin from '~/packages/naked-ui/src/utils/namePrefix'

export default {
  name: 'nCarousel',
  mixins: [carouselNavigation, namePrefixMixin],
  props: { 
    paginationItems: {
      type: [Array, Number],
      required: true
    },
    paginationEnabled: {
      type: Boolean,
      default: true
    },
    refName: {
      type: String,
      required: true,
      default: 'slide'
    },
    kind: {
      type: String,
      default: 'slider'
    },
    autoplay: { // TO DO
      type: Boolean,
      default: false
    }
  },
  computed: {
    componentClasses () {
      return [
        `carousel`,
        this.kind === 'slider' && `carousel--slider`,
        this.kind === 'overflow' && `carousel--overflow`,
        this.kind === 'overflow-desktop' && `carousel--overflow-desktop`,
        this.kind === 'overflow-tablet' && `carousel--overflow-tablet`,
        this.kind === 'overflow-mobile' && `carousel--overflow-mobile`
      ]
    },
    paginationIsAvailable () {
      if (this.kind === 'overflow' || this.kind === 'overflow-desktop' || this.kind === 'overflow-tablet' || this.kind === 'overflow-mobile') {
        return false
      } else return true
    }
  },
  methods: {
    prevSlide (index) {
      return index - 1
    },
    nextSlide (index) {
      return index + 1
    }
  }
}
</script>

<style lang="scss" src="./nCarousel.scss" />
