<template>
  <div
    class="card-accordeons"
    :class="{ 'card-accordeons--open': isOpen }"
    @click="toggleAccordion"
  >
    <div class="card-accordeons__content">
      <div class="card-accordeons__visible">
        <div class="card-accordeons__info">
          <p v-if="number" class="card-accordeons__number" v-html="number"></p>
          <p v-if="title" class="card-accordeons__title" v-html="title"></p>
        </div>

        <div class="card-accordeons__button-container">
          <AtomsIcon
            :icon="isOpen ? 'accordeon-closed' : 'accordeon-open'"
            class="card-accordeons__icon"
          />
        </div>
      </div>

      <div v-if="isOpen" class="card-accordeons__closable">
        <p v-if="text" class="card-accordeons__text" v-html="text"></p>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    title: {
      type: String,
    },
    text: {
      type: String,
    },

    number: {
      type: String,
    },
  });

  const isOpen = ref(false);

  const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
  };
</script>
<style lang="scss">
  @import 'CardAccordeons';
</style>
