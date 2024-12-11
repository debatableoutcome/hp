<template>
  <div class="card-testimonials">
    <div class="card-testimonials__frame">
      <p v-if="text" class="card-testimonials__text" v-html="text"></p>
    </div>
    <div class="card-testimonials__info">
      <p v-if="name" class="card-testimonials__name" v-html="name"></p>
      <p
        v-if="position"
        class="card-testimonials__position"
        v-html="position"
      ></p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
    },
    name: {
      type: String,
    },
    position: {
      type: String,
    },
  });
</script>

<style lang="scss">
  @import 'CardTestimonials';
</style>
