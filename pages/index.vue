<template>
  <OrganismsHero v-if="heroData" v-bind="heroData" class="mb-56 mb-md-70" />
  <SlidersSliderLogos
    v-if="sliderLogosData"
    v-bind="sliderLogosData"
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
</script>
