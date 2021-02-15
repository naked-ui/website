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
        :slideIdDisabled="true"
        :amountToScroll="2"
      >
        <template #prevButton>PREV</template>
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :visibleItems="3"
          :refName="'slider1-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
        <template #nextButton>NEXT</template>
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
    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems"
        :refName="'slider4-carousel'"
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider4-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
      </nSliderCarousel>
    </section>
    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems"
        :refName="'slider5-carousel'"
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider5-carousel'"
        >
          {{ `Item ${index + 1}` }}
        </nSliderCarouselItem>
      </nSliderCarousel>
    </section>
    <section class="test-page__content">
      <nSliderCarousel
        :paginationItems="carouselItems"
        :refName="'slider6-carousel'"
      >
        <nSliderCarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index + 1"
          :refName="'slider6-carousel'"
        >
          {{ `Item ${index + 1}` }}
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

    &-content {
      @include flex($place: center);
      text-align: center;
      font: 700 24px/32px -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      color: var(--nui-color-black) !important;
    }
  }
}
</style>
