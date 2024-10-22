// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: process.env.STORYBOOK ? ['@nuxtjs/storybook'] : [],
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/vars/index.scss";
            @import "@/assets/scss/mixins/index.scss";
          `,
        },
      },
    },
  },
});
