<template>
  <div class="card-team">
    <div class="card-team__content">
      <div class="card-team__top">
        <AtomsImage v-if="image" v-bind="image" class="card-team__image" />

        <AtomsIcon v-if="icon" :icon="icon" class="card-team__icon" />

        <div class="card-team__info">
          <p v-if="name" class="card-team__name" v-html="name"></p>
          <p v-if="position" class="card-team__position" v-html="position"></p>
        </div>
      </div>
      <div class="card-team__bottom">
        <p v-if="text" class="card-team__text" v-html="text"></p>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    name: {
      type: String,
    },
    icon: {
      type: String,
    },

    position: {
      type: String,
    },
    image: {
      type: Object,
    },

    text: {
      type: String,
    },
  });
</script>
<style lang="scss">
  @import 'CardTeam';
</style>
