<template>
  <div class="card-features" :class="classes">
    <div class="card-features__content">
      <div class="card-features__title">
        <h3 v-if="titleUpper" class="card-features__title-upper">
          {{ titleUpper }}
        </h3>
        <h3 v-if="titleLower" class="card-features__title-lower">
          {{ titleLower }}
        </h3>
      </div>
      <AtomsImage v-if="image" v-bind="image" class="card-features__image" />
      <AtomsAction
        v-if="action"
        v-bind="{
          ...action,
          theme:
            props.theme === 'gray' || props.theme === 'neon-green'
              ? 'black'
              : 'white',
        }"
        class="card-features__action"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    titleUpper: {
      type: String,
    },
    titleLower: {
      type: String,
    },
    theme: {
      type: String,
      default: 'gray',
      validator: function (value) {
        return ['gray', 'neon-green', 'black'].indexOf(value) !== -1;
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
</script>

<style lang="scss">
  @import 'CardFeatures';
</style>
