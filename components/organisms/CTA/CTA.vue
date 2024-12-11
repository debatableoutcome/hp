<template>
  <section class="call-to-action">
    <div class="call-to-action__container container">
      <div class="call-to-action__wrapper">
        <div class="call-to-action__info">
          <h3 v-if="title" class="call-to-action__title" v-html="title"></h3>
          <p v-if="text" class="call-to-action__text" v-html="text"></p>

          <div v-if="action" class="call-to-action__button-container">
            <AtomsButton
              class="call-to-action__button"
              v-bind="action"
              theme="black"
            />
          </div>
        </div>
        <AtomsImage v-bind="image" class="call-to-action__image" />
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
  @import 'CTA';
</style>
