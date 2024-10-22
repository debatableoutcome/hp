<template>
  <AtomsImageAdaptive v-if="tab || mob" v-bind="props" />
  <AtomsImageRegular v-else v-bind="props" />
</template>

<script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
    },
    alt: {
      type: String,
      default: 'image',
    },
    mob: {
      type: Object,
    },
    tab: {
      type: Object,
    },
    disable_lazy: {
      type: Boolean,
    },
  });
</script>

<style lang="scss">
  @import 'Image';
</style>
