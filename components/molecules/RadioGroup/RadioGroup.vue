<template>
  <div class="radio-group">
    <label
      v-for="option in options"
      :key="option.id"
      class="radio-group__label"
    >
      <input
        type="radio"
        :id="option.id"
        :value="option.value"
        :checked="internalCheckedValue === option.value"
        @change="handleChange(option.value)"
        :name="name"
        class="radio-group__input"
      />
      <span class="radio-group__custom"></span>
      {{ option.label }}
    </label>
  </div>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue';

  const props = defineProps({
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const internalCheckedValue = ref(props.modelValue);

  const handleChange = (value) => {
    internalCheckedValue.value = value;
    emit('update:modelValue', value);
  };

  watch(
    () => props.modelValue,
    (newValue) => {
      internalCheckedValue.value = newValue;
    },
    { immediate: true }
  );

  onMounted(() => {
    if (!internalCheckedValue.value && props.modelValue) {
      internalCheckedValue.value = props.modelValue;
      emit('update:modelValue', props.modelValue);
    }
  });
</script>

<style lang="scss">
  @import 'RadioGroup';
</style>
