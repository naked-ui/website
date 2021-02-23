<template>
  <article class="test-page__inner">

    <header class="test-page__heading">
      <h1>Slider Carousel</h1>
    </header>

    <!-- <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems1"
        :refName="'slider1-carousel'"
        :infiniteScroll="false"
        :amountToScroll="2"
      >
        <template v-slot:prev-button>Custom prev</template>
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems1"
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
        :paginationItems="carouselItems2"
        :refName="'slider2-carousel'"
        navigationDisabled
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems2"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider2-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
      </nSliderCarousel>
    </section> -->

    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems3"
        :refName="'slider-carousel3'"
        :loopItems="true"
        :infiniteScroll="true"
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems3"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider-carousel3'"
        >
          {{ item.title }}
        </nSliderCarouselItem>
      </nSliderCarousel>
    </section>

  </article>
</template>

<script>
// import { nSliderCarousel, nSliderCarouselItem } from '@naked-ui/vue'
import { nSliderCarousel, nSliderCarouselItem } from '~/packages/@naked-ui/vue/src/main.js'

export default {
  layout: 'test',
  components: {
    nSliderCarousel,
    nSliderCarouselItem,
  },
  data () {
    return {
      carouselItems1: 16,
      carouselItems2: 12,
      carouselItems3: [
        {
          title: 'Slide 1'
        },
        {
          title: 'Slide 2'
        },
        {
          title: 'Slide 3'
        },
        {
          title: 'Slide 4'
        },
        {
          title: 'Slide 5'
        },
        {
          title: 'Slide 6'
        },
        {
          title: 'Slide 7'
        },
        {
          title: 'Slide 8'
        },
        {
          title: 'Slide 9'
        },
      ],
      carouselItems4: 16
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

  &__prev,
  &__next {
    background-color: var(--nui-color-black);
    color: var(--nui-color-white);
  }
}
</style>
