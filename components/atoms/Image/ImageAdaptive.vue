<template>
  <div class="image" itemscope itemtype="http://schema.org/ImageObject">
    <picture v-if="disable_lazy">
      <source
        v-if="mob"
        :media="`(max-width: ${devices.md - 1}px)`"
        :srcset="computedSrcset(mob.srcset)"
      />
      <source
        v-if="tab"
        :media="`(max-width: ${devices.lg - 1}px)`"
        :srcset="computedSrcset(tab.srcset)"
      />
      <img :src="src" :alt="alt" :srcset="computedSrcset(srcset)" />
    </picture>
    <picture v-else>
      <source
        v-if="mob"
        :media="`(max-width: ${devices.md - 1}px)`"
        :srcset="computedSrcset(mob.srcset)"
      />
      <source
        v-if="tab"
        :media="`(max-width: ${devices.lg - 1}px)`"
        :srcset="computedSrcset(tab.srcset)"
      />
      <img
        :src="src"
        :alt="alt"
        :srcset="computedSrcset(srcset)"
        loading="lazy"
      />
    </picture>
    <span v-if="description" :itemprop="description">{{ description }}</span>
  </div>
</template>

<script setup>
  import { devices } from '@/utils/breakpoints';

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
    mob: {
      type: Object,
    },
    tab: {
      type: Object,
    },
    disable_lazy: {
      type: Boolean,
    },
    description: String,
  });

  function computedSrcset(srcset) {
    if (!srcset) return null;
    return srcset.reduce((arr, item, i) => {
      return `${item.src} ${item.scale}x ${i < arr.length ? ', ' : ''}`;
    }, '');
  }
</script>
