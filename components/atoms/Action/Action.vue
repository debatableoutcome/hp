<template>
  <div class="action" :class="classes">
    <AtomsLink v-if="href" :href="href" class="action__link">
      <div class="action__wrapper">
        <AtomsIcon v-if="icon" :icon="icon" class="action__icon" />

        <span v-if="text" class="action__text">{{ text }}</span>
      </div>
    </AtomsLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    href: {
      type: String,
    },
    icon: {
      type: String,
    },
    text: {
      type: String,
    },
    theme: {
      type: String,
      default: 'black',
      validator: function (value) {
        return ['black', 'white'].indexOf(value) !== -1;
      },
    },
  });

  const classes = computed(() => {
    return {
      action: true,
      [`action--${props.theme}`]: props.theme,
    };
  });
</script>

<style lang="scss">
  @import 'Action';
</style>
