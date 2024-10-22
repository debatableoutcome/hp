<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <img src="/icons/logo.svg" alt="Logo" />
      </div>

      <div class="header__nav-icon-container" @click="toggleMobileMenu">
        <span class="header__nav-icon">
          <img
            :src="isMobileMenuOpen ? '/icons/close.svg' : '/icons/burger.svg'"
            alt="menu"
          />
        </span>
      </div>

      <div
        class="header__nav-wrapper"
        :class="{ 'header__nav-wrapper--open': isMobileMenuOpen }"
      >
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li v-for="(item, index) in nav" :key="index">
              <a :href="item.href">{{ item.text }}</a>
            </li>
          </ul>
        </nav>
        <AtomsButton class="header__button" v-bind="action" />
      </div>
    </div>
  </header>
</template>

<script setup>
  const props = defineProps({
    nav: Array,
    action: Object,
  });

  const isMobileMenuOpen = ref(false);

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }
</script>

<style lang="scss">
  @import 'Header';
</style>
