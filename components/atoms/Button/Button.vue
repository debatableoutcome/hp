<template>
  <component :is="componentType" :class="classes" class="button">
    <span v-if="text" class="btn__text">{{ text }}</span>
  </component>
</template>

<script setup>
  const AtomsLink = resolveComponent('AtomsLink');

  const props = defineProps({
    href: {
      type: String,
    },
    text: {
      type: String,
    },
    theme: {
      type: String,
      default: 'white',
      validator: function (value) {
        return ['white', 'black'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: 'auto',
      validator: function (value) {
        return ['auto', 'full-width'].indexOf(value) !== -1;
      },
    },
  });

  const componentType = computed(() => {
    return props.href ? AtomsLink : 'button';
  });

  const classes = computed(() => {
    return {
      btn: true,
      [`btn--${props.theme}`]: props.theme,
    };
  });
</script>

<style lang="scss">
  @import 'Button';
</style>
