<template>
  <div
    class="input"
    :class="{ 'input--error': meta && meta.touched && meta.error }"
  >
    <Field
      :name="name"
      :type="type"
      :rules="validationRules"
      v-slot="{ field, meta }"
      v-bind="field"
      :id="id"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input__field"
      @focus="focused = true"
      @blur="focused = false"
      :class="{ 'input--focused': focused, 'input--filled': field?.value }"
    />
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
    <ErrorMessage
      v-if="meta && meta.error"
      :name="name"
      class="input__error-message"
    />
  </div>
</template>

<script setup>
  import { Field, ErrorMessage } from 'vee-validate';
  import * as Yup from 'yup';

  const props = defineProps({
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    errorMessage: { type: String, default: 'This field is required' },
  });

  const focused = ref(false);

  const validationRules = computed(() => {
    let schema = Yup.string();
    if (props.required) schema = schema.required(props.errorMessage);
    if (props.type === 'email')
      schema = schema.email('Please enter a valid email address');
    if (props.type === 'tel')
      schema = schema.matches(
        /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        'Please enter a valid phone number'
      );
    return schema;
  });
</script>

<style lang="scss">
  @import 'Input';
</style>
