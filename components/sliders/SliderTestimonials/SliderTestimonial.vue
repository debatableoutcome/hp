<template>
  <section class="slider-testimonials">
    <div class="slider-testimonials__container container">
      <AtomsIntro
        v-if="header"
        v-bind="header"
        class="slider-testimonials__header"
      />
      <div class="slider-testimonials__swiper swiper" ref="swiper">
        <div class="slider-testimonials__wrapper swiper-wrapper">
          <div
            v-for="(item, i) in items"
            class="slider-testimonials__slide swiper-slide"
            :key="i"
          >
            <MoleculesCardTestimonials
              v-if="item"
              v-bind="item"
              class="slider-testimonials__card"
              :style="`--item-index: ${i}`"
            />
          </div>
        </div>

        <div
          ref="pagination"
          class="slider-testimonials__pagination swiper-pagination"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Swiper from 'swiper';
  import { Pagination } from 'swiper/modules';
  const props = defineProps({
    header: {
      type: Object,
    },

    items: {
      type: Array,
    },
  });

  const slider = ref(null);
  const swiper = ref(null);
  const pagination = ref(null);

  function initSlider() {
    slider.value = new Swiper(swiper.value, {
      modules: [Pagination],
      slidesPerView: 'auto',
      simulateTouch: false,
      pagination: {
        el: pagination.value,
        clickable: true,
      },
    });
  }

  onMounted(() => {
    initSlider();
  });
</script>

<style lang="scss">
  @import 'SliderTestimonials';
</style>
