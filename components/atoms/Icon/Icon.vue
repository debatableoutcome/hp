<template>
  <span v-if="icon && svgHtml" :class="classes" v-html="svgHtml"></span>
  <span v-else-if="icon && !svgHtml" :class="classes">
    <IconAmazon v-if="icon === 'logo-amazon'" />
    <IconDribble v-if="icon === 'logo-dribble'" />
    <IconHubspot v-if="icon === 'logo-hubspot'" />
    <IconNotion v-if="icon === 'logo-notion'" />
    <IconNetflix v-if="icon === 'logo-netflix'" />
    <IconZoom v-if="icon === 'logo-zoom'" />
  </span>
  <span v-else :class="classes">
    <slot></slot>
  </span>
</template>

<script setup>
  import IconAmazon from '@/assets/icons/logo-amazon.svg';
  import IconDribble from '@/assets/icons/logo-dribble.svg';
  import IconHubspot from '@/assets/icons/logo-hubspot.svg';
  import IconNotion from '@/assets/icons/logo-notion.svg';
  import IconNetflix from '@/assets/icons/logo-netflix.svg';
  import IconZoom from '@/assets/icons/logo-zoom.svg';

  const props = defineProps({
    icon: String,
    size: String,
  });

  const svgHtml = ref(null);

  const classes = computed(() => ({
    icon: true,
    [`icon--${props.size}`]: props.size,
  }));

  const isLink = computed(() => props.icon && props.icon.includes('http'));

  const getSVGHtml = async () => {
    if (isLink.value) {
      svgHtml.value = await fetch(props.icon).then((res) => res.text());
    }
  };

  watchEffect(() => {
    if (isLink.value) {
      getSVGHtml();
    }
  });

  onMounted(() => {
    if (isLink.value) {
      getSVGHtml();
    }
  });
</script>

<style lang="scss">
  @import 'Icon';
</style>
