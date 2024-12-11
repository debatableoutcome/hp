import Intro from './Intro.vue';

export default {
  title: 'Atoms/Intro',
  component: Intro,
  argTypes: {
    title: { control: 'text', description: 'Основной заголовок' },
    titleUpper: { control: 'text', description: 'Верхний заголовок' },
    titleLower: { control: 'text', description: 'Нижний заголовок' },
    text: { control: 'text', description: 'Текст для описания' },
  },
};

const Template = (args) => ({
  components: { Intro },
  setup() {
    return { args };
  },
  template: '<intro v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Services',
  text: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
};

export const WithUpperLowerTitles = Template.bind({});
WithUpperLowerTitles.args = {
  titleUpper: 'Welcome',
  titleLower: 'To Our Services',
  text: 'We provide specialized services to help you reach your goals effectively and efficiently.',
};
