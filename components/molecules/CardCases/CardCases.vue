<template>
  <div class="card-cases">
    <p v-if="text" class="card-cases__text" v-html="text"></p>
    <AtomsAction
      v-if="action"
      v-bind="{
        ...action,
        theme: 'neon-green',
        iconPlacement: 'icon-right',
      }"
      class="card-cases__action"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
    },
    action: {
      type: Object,
    },
  });
</script>

<style lang="scss">
  @import 'CardCases';
</style>
