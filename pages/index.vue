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
    class="mb-56 mb-md-70"
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
</script>
