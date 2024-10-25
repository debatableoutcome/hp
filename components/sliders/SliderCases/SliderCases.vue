<template>
  <section class="slider-cases">
    <div class="slider-cases__container container">
      <AtomsIntro :title="title" :text="text" class="slider-cases__header" />
      <div class="slider-cases__swiper swiper" ref="swiper">
        <div class="slider-cases__wrapper swiper-wrapper">
          <div
            v-for="(item, i) in items"
            class="slider-cases__slide swiper-slide"
            :key="i"
          >
            <MoleculesCardCases
              v-if="item"
              v-bind="item"
              class="slider-cases__card"
              :style="`--item-index: ${i}`"
            />
          </div>
        </div>

        <div
          ref="pagination"
          class="slider-cases__pagination swiper-pagination"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Swiper from 'swiper';
  import { Pagination } from 'swiper/modules';
  const props = defineProps({
    title: {
      type: String,
    },
    text: {
      type: String,
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
  @import 'SliderCases';
</style>
