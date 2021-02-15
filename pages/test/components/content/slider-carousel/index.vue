<template>
  <article class="test-page__inner">

    <header class="test-page__heading">
      <h1>Slider Carousel</h1>
    </header>

    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems"
        :refName="'slider1-carousel'"
        :infiniteScroll="false"
        :amountToScroll="2"
      >
        <template v-slot:prev-button>Custom prev</template>
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :visibleItems="3"
          :refName="'slider1-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
        <template v-slot:next-button>Custom next</template>
      </nSliderCarousel>
    </section>

    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems"
        :refName="'slider2-carousel'"
        navigationDisabled
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider2-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
      </nSliderCarousel>
    </section>

    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems"
        :refName="'slider3-carousel'"
        :slideIdEnabled="true"
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider3-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
      </nSliderCarousel>
    </section>

  </article>
</template>

<script>
import { nSliderCarousel, nSliderCarouselItem } from '@naked-ui/vue'
// import { nSliderCarousel, nSliderCarouselItem } from '~/packages/@naked-ui/vue/src/main.js'

export default {
  layout: 'test',
  components: {
    nSliderCarousel,
    nSliderCarouselItem,
  },
  data () {
    return {
      carouselItems: 16
    }
  },
}
</script>

<style lang="scss">
.slider-carousel {

  &__item {
    @include flex($place: center);
    background-color: var(--nui-color-grey);
    border-radius: 12px;

    &-content {
      @include flex($place: center);
      text-align: center;
      font: 700 24px/32px -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      color: var(--nui-color-black) !important;
    }
  }

  &__pagination-button--active {
    background-color: var(--nui-color-black) !important;
  }

  &__prev,
  &__next {
    background-color: var(--nui-color-black);
    color: var(--nui-color-white);
  }
}
</style>
