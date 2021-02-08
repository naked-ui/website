<template>
  <article class="test-page__inner">
    <header class="test-page__heading">
      <h1>Slider Carousel</h1>
    </header>
    <section class="test-page__content">
      <nCarousel
        :paginationItems="carouselItems"
        :refName="'slider-carousel'"
      >
        <nCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nCarouselItem>
      </nCarousel>
    </section>
  </article>
</template>

<script>
import { nButton } from '~/packages/naked-ui/src/main'
import { nCarousel, nCarouselItem } from '~/packages/naked-ui/src/main'
import { nOverflowCarousel, nOverflowCarouselItem } from '~/packages/naked-ui/src/main'

export default {
  layout: 'test',
  components: {
    nCarousel,
    nCarouselItem,
  },
  data () {
    return {
      carouselItems: 16
      // carouselItems: 12
    }
  },
}
</script>
