import Link from './Link.vue';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    href: { control: 'text', description: 'URL для ссылки' },
    target: { control: 'text', description: 'Атрибут target для ссылки' },
    default: { control: 'text', description: 'Текст внутри ссылки' },
  },
};

const Template = (args) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: `
    <Link v-bind="args">
      <template v-slot>{{ args.default }}</template>
    </Link>
  `,
});

export const InternalLink = Template.bind({});
InternalLink.args = {
  href: '/page',
  default: 'Page',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  href: 'https://www.google.com',
  default: 'External',
};

export const FileLink = Template.bind({});
FileLink.args = {
  href: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  default: 'File',
};

export const ContactEmail = Template.bind({});
ContactEmail.args = {
  href: 'mailto:info@example.com',
  default: 'Email us',
};

export const ContactPhone = Template.bind({});
ContactPhone.args = {
  href: 'tel:+1234567890',
  default: 'Call us',
};

export const ModalLink = Template.bind({});
ModalLink.args = {
  href: '/some-path?modal=true',
  default: 'Open Modal',
};

export const CustomTargetLink = Template.bind({});
CustomTargetLink.args = {
  href: 'https://example.com',
  target: '_self',
  default: 'Open in same tab',
};
