<template>
  <div class="card-logo">
    <div v-if="icon" class="card-logo__icon">
      <AtomsIcon :icon="icon" class="card-logo__icon" />
    </div>
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
