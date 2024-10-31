import vue from '@vitejs/plugin-vue';
import path from 'path';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
        },
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
    });
  },
};

export default config;
