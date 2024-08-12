<template>
  <button class="button" :class="type">{{ label }}</button>
</template>

<script setup>
  defineProps({
    label: String,
    type: {
      type: String,
      default: 'primary',
    },
  });
</script>

<style lang="scss">
  @import 'Button';
</style>
