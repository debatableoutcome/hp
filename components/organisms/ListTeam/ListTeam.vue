<template>
  <section class="list-team__container container">
    <AtomsIntro v-if="header" v-bind="header" class="list-team__header" />

    <div class="list-team__cards">
      <MoleculesCardTeam
        v-for="(item, index) in visibleItems"
        :key="index"
        v-bind="item"
        class="list-team__card"
      />
    </div>
    <div class="list-team__footer">
      <div class="list-team__button-container">
        <AtomsButton
          class="list-team__toggle-button"
          theme="black"
          size="full-width"
          @click="toggleShowAll"
          :text="showAll ? buttonText.showLess : buttonText.showAll"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    header: Object,
    items: {
      type: Array,
      required: true,
    },
    buttonText: {
      type: Object,
      default: () => ({ showAll: 'See All Team', showLess: 'Show Less' }),
    },
  });

  const showAll = ref(false);
  const isDesktopDevice = ref(false);

  const checkIsDesktop = () => {
    isDesktopDevice.value = window.innerWidth >= 1024;
  };

  onMounted(() => {
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkIsDesktop);
  });

  const toggleShowAll = () => {
    showAll.value = !showAll.value;
  };

  const visibleItems = computed(() => {
    if (showAll.value) return props.items;
    return isDesktopDevice.value
      ? props.items.slice(0, 6)
      : props.items.slice(0, 4);
  });
</script>

<style lang="scss">
  @import 'ListTeam';
</style>
