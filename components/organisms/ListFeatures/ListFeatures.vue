<template>
  <section class="list-features container">
    <AtomsIntro v-if="header" v-bind="header" class="list-features__header" />

    <div class="list-features__cards">
      <MoleculesCardFeatures
        v-for="(item, index) in items"
        :key="index"
        :titleUpper="item.titleUpper"
        :titleLower="item.titleLower"
        :action="item.action"
        :image="item.image"
        :theme="item.theme"
        class="list-features__card"
      />
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
    },
    header: {
      type: Object,
    },

    text: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="scss">
  @import 'ListFeatures';
</style>
