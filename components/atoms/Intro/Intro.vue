<template>
  <div class="intro">
    <h2 v-if="title" class="intro__title" v-html="title"></h2>
    <div v-if="titleUpper || titleLower" class="intro__header">
      <h2 v-if="titleUpper" class="intro__title-upper">
        {{ titleUpper }}
      </h2>
      <h2 v-if="titleLower" class="intro__title-lower">
        {{ titleLower }}
      </h2>
    </div>
    <p v-if="text" class="intro__text" v-html="text"></p>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
    },
    titleUpper: {
      type: String,
    },
    titleLower: {
      type: String,
    },
    text: {
      type: String,
    },
  });
</script>

<style lang="scss">
  @import 'Intro';
</style>
