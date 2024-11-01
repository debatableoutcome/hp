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
  import { ref, watch } from 'vue';

  const props = defineProps({
    options: {
      type: Array,
      required: true,
    },
    checkedValue: {
      type: String,
      default: '', // Initial checked value if provided
    },
    name: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(['update:checkedValue']);

  // Internal state for the currently checked value
  const internalCheckedValue = ref(props.checkedValue || '');

  // Update internal value and emit only when the selected option changes
  const handleChange = (value) => {
    internalCheckedValue.value = value;
    emit('update:checkedValue', value);
  };

  // Sync the initial checkedValue prop with internal state
  watch(
    () => props.checkedValue,
    (newValue) => {
      internalCheckedValue.value = newValue;
    },
    { immediate: true }
  );
</script>

<style lang="scss">
  @import 'RadioGroup';
</style>
