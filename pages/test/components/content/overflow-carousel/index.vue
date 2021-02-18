<template>
  <article class="test-page__inner">
    <header class="test-page__heading">
      <h1>Overflow Carousel</h1>
    </header>
    <section class="test-page__content">
      <nOverflowCarousel
        :paginationItems="carouselItems"
        itemsGap="20px"
        viewportPadding="20px"
      >
        <nOverflowCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          width="300px"
          height="300px"
        >
          {{ `Item ${index + 1}` }}
        </nOverflowCarouselItem>
      </nOverflowCarousel>

      <br>

      <nOverflowCarousel
        :paginationItems="carouselItems"
      >
        <nOverflowCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          width="200px"
          height="200px"
        >
          {{ `Item ${index + 1}` }}
        </nOverflowCarouselItem>
      </nOverflowCarousel>

      <br>

      <nOverflowCarousel
        :paginationItems="carouselItems"
        itemsGap="40px"
        viewportPadding="20px"
      >
        <nOverflowCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          width="400px"
          height="400px"
        >
          {{ `Item ${index + 1}` }}
        </nOverflowCarouselItem>
      </nOverflowCarousel>
    </section>
  </article>
</template>

<script>
import { nOverflowCarousel, nOverflowCarouselItem } from '~/packages/@naked-ui/vue/src/main.js'

export default {
  layout: 'test',
  components: {
    nOverflowCarousel,
    nOverflowCarouselItem,
  },
  data () {
    return {
      carouselItems: 16
      // carouselItems: 12
    }
  },
}
</script>

<style lang="scss">
.overflow-carousel {

  &__item {
    @include flex($place: center);
    background-color: var(--nui-color-grey);

    &-content {
      @include flex($place: center);
      text-align: center;
      font: 700 24px/32px -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      color: var(--nui-color-black) !important;
    }
  }
}
</style>