import Image from './Image.vue';

export default {
  title: 'Atoms/Image',
  component: Image,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Image },
  template: '<Image v-bind="args" />',
});

export const StaticImage = Template.bind({});
StaticImage.args = {
  src: 'https://source.unsplash.com/random',
  disable_lazy: true,
};

export const ImageAdaptive = Template.bind({});
ImageAdaptive.args = {
  src: 'https://source.unsplash.com/random/1440x720',
  tab: {
    srcset: [
      {
        src: 'https://source.unsplash.com/random/768x720',
        scale: '1',
      },
    ],
  },
  mob: {
    srcset: [
      {
        src: 'https://source.unsplash.com/random/320x720',
        scale: '1',
      },
    ],
  },
  disable_lazy: true,
};
