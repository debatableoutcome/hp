<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__left">
        <h1 class="hero__title" v-html="title"></h1>
        <div v-if="image" class="hero__mobile-image">
          <AtomsImage v-bind="image" class="hero__image" />
        </div>
        <p class="hero__text" v-html="text"></p>
        <div class="hero__button-container">
          <AtomsButton
            class="hero__button"
            v-bind="action"
            theme="black"
            size="full-width"
          />
        </div>
      </div>
      <div v-if="image" class="hero__right">
        <AtomsImage v-bind="image" class="hero__image" />
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: String,
    text: String,
    image: Object,
    action: Object,
  });
</script>

<style lang="scss">
  @import 'hero';
</style>
