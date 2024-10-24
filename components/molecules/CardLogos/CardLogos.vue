<template>
  <div v-if="icon" class="card-logos">
    <AtomsIcon :icon="icon" class="card-logos__icon" />
  </div>
</template>

<script setup>
  const props = defineProps({
    icon: {
      type: String,
    },
  });
</script>

<style lang="scss">
  @import 'CardLogos';
</style>
