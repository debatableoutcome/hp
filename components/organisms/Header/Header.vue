<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <img :src="logo" alt="Logo" />
      </div>

      <nav class="header__nav-desktop">
        <ul class="header__nav-desktop-list">
          <li v-for="(item, index) in nav" :key="index">
            <a :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
        <AtomsButton class="header__button" v-bind="action" />
      </nav>

      <div class="header__nav-icon-container" @click="toggleMobileMenu">
        <span class="header__nav-icon" :class="{ open: isMobileMenuOpen }">
          <img :src="isMobileMenuOpen ? close : select" alt="menu" />
        </span>
      </div>

      <nav class="header__nav-mobile" v-if="isMobileMenuOpen">
        <ul>
          <li
            v-for="(item, index) in nav"
            :key="index"
            @click="toggleMobileMenu"
          >
            <a :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    logo: String,
    select: String,
    close: String,
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
