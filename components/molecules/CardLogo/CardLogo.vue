<template>
  <div v-if="icon" class="card-logo">
    <AtomsIcon :icon="icon" class="card-logo__icon" />
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
  @import 'CardLogo';
</style>
