<template>
  <section class="contact-us__container container">
    <AtomsIntro v-if="header" v-bind="header" class="contact-us__header" />
    <div class="contact-us__content">
      <OrganismsFormDefault v-bind="form" class="contact-us__form" />
      <AtomsImage v-if="image" v-bind="image" class="contact-us__image" />
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    header: Object,
    image: Object,
    form: {
      type: Object,
      required: true,
    },
  });
</script>

<style lang="scss">
  @import 'ContactUs';
</style>
