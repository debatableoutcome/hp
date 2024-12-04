<template>
  <div class="navigation">
    <div class="navigation__arrow--prev">
      <AtomsIcon :icon="prevIcon" class="navigation__icon" />
    </div>

    <div
      ref="pagination"
      class="navigation__bullets"
    ></div>
    <div class="navigation__arrow--next">
      <AtomsIcon :icon="nextIcon" class="navigation__icon" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  prevIcon: {
    type: String,
    default: "arrow-left",
  },
  nextIcon: {
    type: String,
    default: "arrow-right",
  },
});
</script>

<style lang="scss">
@import "Navigation";
</style>
