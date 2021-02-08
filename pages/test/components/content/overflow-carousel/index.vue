<template>
  <article class="test-page__inner">
    <header class="test-page__heading">
      <h1>Overflow Carousel</h1>
    </header>
    <section class="test-page__content">
      <nOverflowCarousel
        :paginationItems="carouselItems"
        :refName="'overflow-carousel'"
      >
        <nOverflowCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'overflow-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nOverflowCarouselItem>
      </nOverflowCarousel>
    </section>
  </article>
</template>

<script>
import { nOverflowCarousel, nOverflowCarouselItem } from '~/packages/naked-ui/src/main'

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
