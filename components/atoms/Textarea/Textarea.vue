<template>
  <div :class="classes">
    <div class="textarea__wrapper">
      <label v-if="label" :for="id" class="textarea__label">{{ label }}</label>
      <textarea
        :id="id"
        :name="name"
        :placeholder="placeholder"
        v-model="message"
        class="textarea__input"
        :required="required"
        @focus="focused = true"
        @blur="focused = false"
      ></textarea>
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

const focused = ref(false);

watch(
  () => props.message,
  (newValue) => {
    message.value = newValue;
  }
);

const classes = computed(() => ({
  textarea: true,
  [`textarea--${props.type}`]: props.type,
  "textarea--required": props.required,
  "textarea--error": props.required && !props.placeholder,
  "textarea--focused": focused.value,
  "textarea--filled": Boolean(props.placeholder),
  "textarea--black": Boolean(props.isBlack),
}));
</script>

<style lang="scss">
@import "Textarea";
</style>
