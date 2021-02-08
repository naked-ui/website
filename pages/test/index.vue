<template>
  <div class="test-page">
    <section>
      <h2>Carousel</h2>
      <div class="sub-section">
        <h3>Slider Carousel</h3>
        <nCarousel
          :paginationItems="carouselItems"
          :refName="'slider-carousel'"
        >
          <nCarouselItem
            v-for="(item, index) in carouselItems"
            :key="index"
            :slideIndex="index"
            :refName="'slider-carousel'"
          >
            {{ `Slider Carousel Item ${index}` }}
          </nCarouselItem>
        </nCarousel>
      </div>
      <div class="sub-section">
        <h3>Overflow List</h3>
        <nOverflowCarousel
          :refName="'overflow-carousel'"
        >
          <nOverflowCarouselItem
            v-for="(item, index) in carouselItems"
            :key="index"
            :slideIndex="index"
            :refName="'overflow-carousel'"
          >
            Overflow Carousel Item
          </nOverflowCarouselItem>
        </nOverflowCarousel>
      </div>
    </section>
  </div>
</template>

<script>
import { nButton } from '~/packages/naked-ui/src/main'
import { nCarousel, nCarouselItem } from '~/packages/naked-ui/src/main'
import { nOverflowCarousel, nOverflowCarouselItem } from '~/packages/naked-ui/src/main'

export default {
  components: {
    nButton,
    nCarousel,
    nCarouselItem,
    nOverflowCarousel,
    nOverflowCarouselItem
  },
  data () {
    return {
      carouselItems: [
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
      ]
      // carouselItems: 12
    }
  },
}
</script>
