<template>
  <section class="list-team__container container">
    <AtomsIntro v-if="header" v-bind="header" class="list-team__header" />

    <div class="list-team__cards">
      <MoleculesCardTeam
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        class="list-team__card"
      />
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    header: {
      type: Object,
    },

    items: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="scss">
  @import 'ListTeam';
</style>
