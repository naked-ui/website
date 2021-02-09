<template>
  <article class="test-page__inner">
    <header class="test-page__heading">
      <h1>Slider Carousel</h1>
    </header>
    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems"
        :refName="'slider-carousel'"
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
      </nSliderCarousel>
    </section>
  </article>
</template>

<script>
import { nSliderCarousel, nSliderCarouselItem } from '~/packages/@naked-ui/vue/src/main.js'

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
    background-color: #bbb;

    &-content {
      @include flex($place: center);
      text-align: center;
      font: 700 24px/32px -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      color: car(--black) !important;
    }
  }
}
</style>