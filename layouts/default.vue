<template>
  <header>
    <OrganismsHeader
      v-if="headerData"
      v-bind="headerData"
      class="pb-40 pb-md-70"
    />
  </header>

  <main>
    <slot />
  </main>

  <footer></footer>
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
</script>
