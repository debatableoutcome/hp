<template>
  <div class="image" itemscope itemtype="http://schema.org/ImageObject">
    <img v-if="disable_lazy" :src="src" :srcset="srcset" :alt="alt" />
    <img v-else :src="src" :srcset="srcset" :alt="alt" loading="lazy" />
    <span v-if="description" :itemprop="description">{{ description }}</span>
  </div>
</template>

<script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
    },
    alt: {
      type: String,
      default: 'image',
    },
    disable_lazy: {
      type: Boolean,
    },
    description: String,
  });
</script>
