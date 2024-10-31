import Icon from './Icon.vue';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: [
        'logo-amazon',
        'logo-dribble',
        'logo-hubspot',
        'logo-notion',
        'logo-netflix',
        'logo-zoom',
        'arrow-up-right',
        'round-arrow-up-right',
        'round-arrow-up-right-white',
        'accordeon-closed',
        'accordeon-open',
        'linkedin',
        'arrow-left',
        'arrow-right',
        'bullet',
        'social/vk', // добавил пример для 'social/vk'
      ],
      description: 'Выбор иконки для отображения',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер иконки',
    },
  },
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args" />',
});

export const IconStatic = Template.bind({});
IconStatic.args = {
  icon: 'social/vk',
  size: 'medium',
};

export const AmazonLogo = Template.bind({});
AmazonLogo.args = {
  icon: 'logo-amazon',
  size: 'medium',
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  icon: 'arrow-right',
  size: 'large',
};

export const LinkedInIcon = Template.bind({});
LinkedInIcon.args = {
  icon: 'linkedin',
  size: 'small',
};
