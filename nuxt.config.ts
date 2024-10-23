import svgLoader from 'vite-svg-loader';
import path from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: process.env.STORYBOOK ? ['@nuxtjs/storybook'] : [],
  css: ['@/assets/scss/main.scss'],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component',
        svgo: false,
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './') }],
    },
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
