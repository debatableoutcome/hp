<template>
  <div class="card-features" :class="classes">
    <div class="card-features__content">
      <h3 class="card-features__title">{{ title }}</h3>

      <AtomsImage v-if="image" v-bind="image" class="card-features__image" />
      <AtomsAction
        v-if="action"
        v-bind="{
          ...action,
          color: props.theme === 'black' ? 'white' : 'black',
        }"
        class="card-features__action"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
    },
    theme: {
      type: String,
      default: 'gray',
      validator: function (value) {
        return ['neo-green', 'black'].indexOf(value) !== -1;
      },
    },
    action: {
      type: Object,
    },
    image: {
      type: Object,
    },
  });

  const classes = computed(() => {
    return {
      'card-features': true,
      [`card-features--${props.theme}`]: props.theme,
    };
  });

  onMounted(() => {
    console.log('Theme prop:', props.theme);
  });
</script>

<style lang="scss">
  @import 'CardFeatures';
</style>
