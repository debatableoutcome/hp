<template>
  <div class="textarea" :class="{ 'textarea--required': required }">
    <div class="textarea__wrapper">
      <textarea
        :id="id"
        :name="name"
        :placeholder="placeholder"
        v-model="message"
        class="textarea__input"
        :required="required"
      ></textarea>
      <label v-if="label" :for="id" class="textarea__label">{{ label }}</label>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    message: {
      type: String,
    },
  });

  const message = ref(props.message);

  watch(
    () => props.message,
    (newValue) => {
      message.value = newValue;
    }
  );
</script>

<style lang="scss">
  @import 'Textarea';
</style>
