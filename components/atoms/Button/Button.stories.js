import Button from './Button.vue';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    text: { control: 'text', description: 'Текст кнопки' },
    href: {
      control: 'text',
      description: 'URL для ссылки (если кнопка должна быть ссылкой)',
    },
    theme: {
      control: { type: 'select' },
      options: ['white', 'black'],
      description: 'Цветовая тема кнопки',
    },
    size: {
      control: { type: 'select' },
      options: ['auto', 'full-width'],
      description: 'Размер кнопки',
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<AtomsButton v-bind="args"></AtomsButton>',
});

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: 'Get your free proposal',
  theme: 'white',
  size: 'auto',
};

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  ...DefaultButton.args,
  size: 'full-width',
};

export const BlackThemeButton = Template.bind({});
BlackThemeButton.args = {
  text: 'Contact Us',
  theme: 'black',
  size: 'auto',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  text: 'Visit Figma Design',
  href: 'https://www.figma.com/design/sXV4hIbkvKIyYJCe3oUlPM/Positivus-Landing-Page-Design-(Community)?node-id=330-762&node-type=frame&t=yqFWfCGOjgc7VjrU-0',
  theme: 'white',
  size: 'auto',
};

// import Intro from './Intro.vue';

// export default {
//   title: 'Atoms/Intro',
//   component: Intro,
//   argTypes: {
//     title: { control: 'text', description: 'Основной заголовок' },
//     titleUpper: { control: 'text', description: 'Верхний заголовок' },
//     titleLower: { control: 'text', description: 'Нижний заголовок' },
//     text: { control: 'text', description: 'Текст для описания' },
//   },
// };

// const Template = (args) => ({
//   components: { Intro },
//   setup() {
//     return { args };
//   },
//   template: '<intro v-bind="args" />',
// });

// export const Default = Template.bind({});
// Default.args = {
//   title: 'Services',
//   text: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
// };

// export const WithUpperLowerTitles = Template.bind({});
// WithUpperLowerTitles.args = {
//   titleUpper: 'Welcome',
//   titleLower: 'To Our Services',
//   text: 'We provide specialized services to help you reach your goals effectively and efficiently.',
// };
