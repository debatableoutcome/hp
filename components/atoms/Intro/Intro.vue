<template>
  <div class="intro">
    <h2 class="intro__title">{{ title }}</h2>

    <p class="intro__text">{{ text }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss">
  @import 'Intro';
</style>
