<template>
  <button :class="classes" class="button">
    <span v-if="text" class="btn__text">{{ text }}</span>
  </button>
</template>

<script setup>
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
  });

  const classes = computed(() => {
    return {
      btn: true,
      [`btn--${props.theme}`]: props.theme,
    };
  });
  onMounted(() => {
    console.log(props.text);
  });
</script>

<style lang="scss">
  @import 'Button';
</style>
