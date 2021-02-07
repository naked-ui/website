<template>
  <div class="test-page">
    <section>
      <h2>Button</h2>
      <nButton>
        Button text
      </nButton>
    </section>
    <section>
      <h2>Carousel</h2>
      <div class="sub-section">
        <h3>Slider Carousel</h3>
        <nCarousel
          :paginationItems="carouselItems"
          carouselKey="slider-carousel"
        >
          <nCarouselItem
            v-for="(item, index) in carouselItems"
            :key="index"
            :slideIndex="index"
          >
            Lel
          </nCarouselItem>
        </nCarousel>
      </div>
      <div>
        <h3 class="page__title">Overflow Carousel</h3>
        <Carousel
          :paginationEnabled="false"
          carouselKey="overflow-carousel"
        >
          <CarouselItem
            v-for="(item, index) in carouselItems"
            :key="index"
            :slideIndex="index"
          >
            {{ index + 1 }}
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  </div>
</template>

<script>
import { nButton } from '~/packages/naked-ui/src/main'
import { nCarousel, nCarouselItem } from '~/packages/naked-ui/src/main'
export default {
  components: {
    nButton,
    nCarousel,
    nCarouselItem
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
