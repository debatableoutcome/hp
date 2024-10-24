<template>
  <section class="list-features container">
    <AtomsIntro :title="title" :text="text" />

    <div class="list-features__cards">
      <MoleculesCardFeatures
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :action="feature.action"
        :image="feature.image"
      />
    </div>
  </section>
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
    features: {
      type: Array,
      required: true,
    },
  });
</script>

<style lang="scss"></style>
