<template>
  <section class="slider-logos">
    <div class="slider-logos__container container">
      <div class="slider-logos__swiper swiper" ref="swiper">
        <div class="slider-logos__wrapper swiper-wrapper">
          <div
            v-for="(item, i) in items"
            class="slider-logos__slide swiper-slide"
            :key="i"
          >
            <MoleculesCardLogo
              v-if="item"
              v-bind="item"
              class="slider-logos__card"
              :style="`--item-index: ${i}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Swiper from 'swiper';

  const props = defineProps({
    items: {
      type: Array,
    },
  });

  const slider = ref(null);
  const swiper = ref(null);

  function initSlider() {
    slider.value = new Swiper(swiper.value, {
      slidesPerView: 'auto',
      simulateTouch: false,
    });
  }

  onMounted(() => {
    initSlider();
  });
</script>

<style lang="scss">
  @import 'SliderLogos';
</style>
