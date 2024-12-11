<template>
  <header>
    <OrganismsHeader
      v-if="headerData"
      v-bind="headerData"
      class="mb-32 mb-md-64"
    />
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <OrganismsFooter v-if="footerData" v-bind="footerData" />
  </footer>
</template>

<script setup>
  const headerData = {
    nav: [
      { text: 'About us', href: '/about/' },
      { text: 'Services', href: '/services/' },
      { text: 'Use Cases', href: '/use-cases/' },
      { text: 'Pricing', href: '/pricing/' },
      { text: 'Blog', href: '/blog/' },
    ],
    action: {
      text: 'Request a quote',
      href: 'https://www.figma.com/design/sXV4hIbkvKIyYJCe3oUlPM/Positivus-Landing-Page-Design-(Community)?node-id=330-762&node-type=frame&t=yqFWfCGOjgc7VjrU-0',
    },
  };

  const footerData = {
    logo: 'path',
    links: [
      {
        title: 'About us',
        href: '/',
      },
      {
        title: 'Services',
        href: '/',
      },
      {
        title: 'UseCases',
        href: '/',
      },
      {
        title: 'Pricing',
        href: '/',
      },
      {
        title: 'Blog',
        href: '/',
      },
    ],
    social: [
      { href: '/about/', icon: 'linkedin-white' },
      { href: '/about/', icon: 'fb-white' },
      { href: '/about/', icon: 'twitter-white' },
    ],
    contactUs: {
      title: 'Contact us:  ',
      details: [
        {
          title: 'Email',
          text: 'info@positivus.com',
        },
        {
          title: 'Phone',
          text: '555-567-8901',
        },
        {
          title: 'Address',
          text: '1234 Main St<br>Moonstone City, Stardust State 12345',
        },
      ],
    },

    fields: [
      {
        input: {
          id: '09',
          type: 'email',
          label: 'E-mail',
          name: 'email',
          required: true,
          placeholder: 'Email',
        },
      },
    ],
    fieldValues: {
      email: '',
    },

    button: {
      text: 'Subscribe to news',
      type: 'submit',
      theme: 'neon-green',
    },
    footer: [
      {
        text: '© 2023 Positivus. All Rights Reserved.',
      },
      {
        text: 'Privacy Policy',
        href: '/',
      },
    ],
  };
</script>
