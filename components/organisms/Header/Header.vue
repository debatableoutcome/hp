<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <img :src="logo" alt="Logo" />
      </div>

      <nav class="header__nav-desktop">
        <ul>
          <li v-for="(item, index) in nav" :key="index">
            <a :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
      </nav>

      <button class="header__button">
        {{ action.text }}
      </button>

      <div class="header__nav-icon-container" @click="toggleMobileMenu">
        <span class="header__nav-icon"></span>
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
    nav: Array,
    action: Object,
  });

  const isMobileMenuOpen = ref(false);

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }
</script>

<style lang="scss">
@use 'Header';
</style>
