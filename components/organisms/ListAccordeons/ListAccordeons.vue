<template>
  <section class="list-accordeons__container container">
    <AtomsIntro :title="title" :text="text" class="list-accordeons__header" />

    <div class="list-accordeons__cards">
      <MoleculesCardAccordeons
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        :number="formatNumber(index + 1)"
        class="list-accordeons__card"
      />
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
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

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
</script>

<style lang="scss">
  @import 'ListAccordeons';
</style>
