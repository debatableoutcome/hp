<template>
  <section class="form-message__container container">
    <AtomsIntro v-if="header" v-bind="header" class="form-message__header" />
    <div class="form-message__content">
      <OrganismsFormDefault v-bind="form" class="form-message__form" />
      <AtomsImage v-if="image" v-bind="image" class="form-message__image" />
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

  onMounted(() => {
    console.log(props.form);
  });
</script>

<style lang="scss">
  @import 'FormMessage';
</style>
