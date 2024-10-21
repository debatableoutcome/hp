<template>
  <div class="select">
    <select v-model="selected" @change="emitChange">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  });

  const emits = defineEmits(['update:modelValue']);

  const selected = ref(props.modelValue);

  function emitChange() {
    emits('update:modelValue', selected.value);
  }
</script>

<style lang="scss">
  @import 'Select';
</style>
