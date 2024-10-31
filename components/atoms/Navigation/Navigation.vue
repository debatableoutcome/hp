<template>
  <div class="navigation">
    <div class="navigation__arrow--prev swiper-button-prev">
      <AtomsIcon :icon="prevIcon" class="navigation__icon" />
    </div>

    <div
      v-if="showBullets"
      ref="pagination"
      class="navigation__bullets swiper-pagination"
    ></div>
    <div class="navigation__arrow--next swiper-button-next">
      <AtomsIcon :icon="nextIcon" class="navigation__icon" />
    </div>
  </div>
</template>

<script setup>
  import Swiper from 'swiper';
  import { Pagination, Navigation } from 'swiper/modules';
  import { onMounted, ref } from 'vue';

  const props = defineProps({
    prevIcon: {
      type: String,
      default: 'arrow-left',
    },
    nextIcon: {
      type: String,
      default: 'arrow-right',
    },
    showArrows: {
      type: Boolean,
      default: true,
    },
    showBullets: {
      type: Boolean,
      default: true,
    },
  });

  const swiper = ref(null);

  function initSlider() {
    swiper.value = new Swiper('.swiper', {
      modules: [Pagination, Navigation],
      slidesPerView: 'auto',
      pagination: props.showBullets
        ? {
            el: '.navigation__bullets',
            clickable: true,
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }
        : false,
      navigation: props.showArrows
        ? {
            nextEl: '.navigation__arrow--next',
            prevEl: '.navigation__arrow--prev',
          }
        : false,
    });
  }

  onMounted(() => {
    initSlider();
  });
</script>

<style lang="scss">
  @import 'Navigation';
</style>
