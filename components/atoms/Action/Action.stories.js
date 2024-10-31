import Action from './Action.vue';

export default {
  title: 'Atoms/Action',
  component: Action,
  argTypes: {
    href: { control: 'text', description: 'URL для ссылки' },
    icon: { control: 'text', description: 'Имя иконки для отображения' },
    text: { control: 'text', description: 'Текст кнопки' },
    theme: {
      control: { type: 'select' },
      options: ['black', 'white', 'neon-green'],
      description: 'Цветовая тема кнопки',
    },
    iconPlacement: {
      control: { type: 'select' },
      options: ['icon-left', 'icon-right'],
      description: 'Расположение иконки',
    },
  },
};

const Template = (args) => ({
  components: { Action },
  setup() {
    return { args };
  },
  template: '<Action v-bind="args"></Action>',
});

export const Default = Template.bind({});
Default.args = {
  href: '/',
  icon: 'round-arrow-up-right-white',
  text: 'Learn more',
  theme: 'black',
  iconPlacement: 'icon-left',
};

export const WhiteTheme = Template.bind({});
WhiteTheme.args = {
  ...Default.args,
  theme: 'white',
};

export const NeonGreenTheme = Template.bind({});
NeonGreenTheme.args = {
  ...Default.args,
  theme: 'neon-green',
};

export const IconRight = Template.bind({});
IconRight.args = {
  ...Default.args,
  iconPlacement: 'icon-right',
};
