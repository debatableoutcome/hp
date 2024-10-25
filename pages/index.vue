<template>
  <OrganismsHero v-if="heroData" v-bind="heroData" class="mb-56 mb-md-0" />
  <SlidersSliderLogos
    v-if="sliderLogosData"
    v-bind="sliderLogosData"
    class="mb-56 mb-md-104"
  />
  <OrganismsListFeatures
    v-if="listFeaturesData"
    v-bind="listFeaturesData"
    class="mb-56 mb-md-104"
  />

  <OrganismsCTA v-if="CTAData" v-bind="CTAData" class="mb-56 mb-md-70" />

  <SlidersSliderCases
    v-if="sliderCasesData"
    v-bind="sliderCasesData"
    class="mb-56 mb-md-104"
  />
</template>

<script setup>
  const heroData = {
    title: 'Navigating the digital landscape for success',
    text: 'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.',
    image: {
      src: '/tmp/hero.jpg',
      alt: 'image',
    },
    action: {
      text: 'Book a consultation',
      href: 'https://www.figma.com/design/sXV4hIbkvKIyYJCe3oUlPM/Positivus-Landing-Page-Design-(Community)?node-id=330-762&node-type=frame&t=yqFWfCGOjgc7VjrU-0',
    },
  };

  const sliderLogosData = {
    items: [
      { icon: 'logo-amazon', alt: 'Amazon Logo' },
      { icon: 'logo-dribble', alt: 'Dribble Logo' },
      { icon: 'logo-hubspot', alt: 'Hubspot Logo' },
      { icon: 'logo-notion', alt: 'Notion Logo' },
      { icon: 'logo-netflix', alt: 'Netflix Logo' },
      { icon: 'logo-zoom', alt: 'Zoom Logo' },
    ],
  };

  const listFeaturesData = {
    title: 'Services',
    text: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
    items: [
      {
        titleUpper: 'Search engine',
        titleLower: 'optimization',
        theme: 'gray',
        action: {
          icon: 'round-arrow-up-right',
          text: 'Learn more',
          href: '/',
        },
        image: {
          src: '/tmp/features/image-01.png',
          alt: 'image',
        },
      },
      {
        titleUpper: 'Pay-per-click',
        titleLower: 'advertising',
        theme: 'neon-green',
        action: {
          icon: 'round-arrow-up-right',
          text: 'Learn more',
          href: '/',
        },
        image: {
          src: '/tmp/features/image-02.png',
          alt: 'image',
        },
      },
      {
        titleUpper: 'Social Media',
        titleLower: 'Marketing',
        theme: 'black',
        action: {
          icon: 'round-arrow-up-right-white',
          text: 'Learn more',
          href: '/',
        },
        image: {
          src: '/tmp/features/image-03.png',
          alt: 'image',
        },
      },
      {
        titleUpper: 'Email',
        titleLower: 'Marketing',
        theme: 'gray',
        action: {
          icon: 'round-arrow-up-right',
          text: 'Learn more',
          href: '/',
        },
        image: {
          src: '/tmp/features/image-04.png',
          alt: 'image',
        },
      },
      {
        titleUpper: 'Content',
        titleLower: 'Creation',
        theme: 'neon-green',
        action: {
          icon: 'round-arrow-up-right',
          text: 'Learn more',
          href: '/',
        },
        image: {
          src: '/tmp/features/image-05.png',
          alt: 'image',
        },
      },
      {
        titleUpper: 'Analytics and',
        titleLower: 'tracking',
        theme: 'black',
        action: {
          icon: 'round-arrow-up-right-white',
          text: 'Learn more',
          href: '/',
        },
        image: {
          src: '/tmp/features/image-06.png',
          alt: 'image',
        },
      },
    ],
  };

  const CTAData = {
    title: 'Let’s make things happen',
    text: 'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.',
    image: {
      src: '/tmp/CTA.png',
      alt: 'image',
    },
    action: {
      text: 'Get your free proposal',
      href: 'https://www.figma.com/design/sXV4hIbkvKIyYJCe3oUlPM/Positivus-Landing-Page-Design-(Community)?node-id=330-762&node-type=frame&t=yqFWfCGOjgc7VjrU-0',
    },
  };

  const sliderCasesData = {
    title: 'Case Studies',
    text: 'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies',
    items: [
      {
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales',
        action: {
          icon: 'arrow-up-right',
          text: 'Learn more',
          href: '/',
        },
      },
      {
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
        action: {
          icon: 'arrow-up-right',
          text: 'Learn more',
          href: '/',
        },
      },
      {
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
        action: {
          icon: 'arrow-up-right',
          text: 'Learn more',
          href: '/',
        },
      },
    ],
  };
</script>
