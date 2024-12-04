<template>
  <section class="slider-testimonials" ref="slider">
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

        <div style="display: flex; justify-content: center;">
          <AtomsNavigation
            ref="navigation"
            :prevIcon="'arrow-left'"
            :nextIcon="'arrow-right'"
            class="slider-testimonials__pagination"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Swiper from 'swiper';
  import { Pagination, Navigation } from 'swiper/modules';

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
  const navigation = ref(null);

  function initSlider() {
    const prev = slider.value.querySelector('.navigation__arrow--prev');
    const next = slider.value.querySelector('.navigation__arrow--next');

    slider.value = new Swiper(swiper.value, {
      modules: [Pagination, Navigation],
      slidesPerView: 'auto',
      simulateTouch: false,
      pagination: {
        el: '.slider-testimonials__pagination .navigation__bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} custom-bullet"></span>`;
        },
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
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
