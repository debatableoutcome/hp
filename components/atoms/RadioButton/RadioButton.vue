<template>
  <div class="radio-button">
    <input
      type="radio"
      :id="id"
      :value="value"
      :checked="value === checkedValue"
      @change="$emit('update:checkedValue', value)"
      :name="name"
      class="radio-button__input"
    />
    <label :for="id" class="radio-button__label">
      <span class="radio-button__circle"></span>
      {{ label }}
    </label>
  </div>
</template>

<script setup>
  const props = defineProps({
    id: { type: String, required: true },
    value: { type: String, required: true },
    checkedValue: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
  });
</script>

<style lang="scss">
  @import 'RadioButton';
</style>
