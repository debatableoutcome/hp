<template>
  <div class="input" :class="classes">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>
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
    />
    <ErrorMessage
      v-if="meta && meta.error"
      :name="name"
      class="input__error-message"
    />
  </div>
</template>

<script setup>
  import { Field, ErrorMessage } from 'vee-validate';
  import { computed, ref } from 'vue';
  import * as Yup from 'yup';

  const props = defineProps({
    id: String,
    name: String,
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    isBlack: { type: Boolean, default: false },
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

  const classes = computed(() => ({
    input: true,
    [`input--${props.type}`]: props.type,
    'input--error': props.required && !props.placeholder,
    'input--focused': focused.value,
    'input--filled': Boolean(props.placeholder),
    'input--black': Boolean(props.isBlack),
  }));
</script>

<style lang="scss">
  @import 'Input';
</style>
