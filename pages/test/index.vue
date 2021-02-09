<template>
  <div class="test-page">
    <section>
      <h2>Carousel</h2>
      <div class="sub-section">
        <h3>Slider Carousel</h3>
        <nSliderCarousel
          :paginationItems="carouselItems"
          :refName="'slider-carousel'"
        >
          <nSliderCarouselItem
            v-for="(item, index) in carouselItems"
            :key="index"
            :slideIndex="index"
            :refName="'slider-carousel'"
          >
            {{ `Slider Carousel Item ${index}` }}
          </nSliderCarouselItem>
        </nSliderCarousel>
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
import { nButton } from '~/packages/@naked-ui/vue/src/main.js'
import { nSliderCarousel, nSliderCarouselItem } from '~/packages/@naked-ui/vue/src/main.js'
import { nOverflowCarousel, nOverflowCarouselItem } from '~/packages/@naked-ui/vue/src/main.js'

export default {
  components: {
    nButton,
    nSliderCarousel,
    nSliderCarouselItem,
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
