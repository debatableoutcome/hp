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
  <OrganismsListAccordeons
    v-if="listAccordeonsData"
    v-bind="listAccordeonsData"
    class="mb-56 mb-md-104"
  />
  <OrganismsListTeam
    v-if="listTeamData"
    v-bind="listTeamData"
    class="mb-56 mb-md-104"
  />

  <SlidersSliderTestimonials
    v-if="sliderTestimonialsData"
    v-bind="sliderTestimonialsData"
    class="mb-56 mb-md-104"
  />

  <OrganismsFormMessage
    v-if="formMessageData"
    v-bind="formMessageData"
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
    header: {
      title: 'Services',
      text: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
    },
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
    header: {
      title: 'Case Studies',
      text: 'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies',
    },

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

  const listAccordeonsData = {
    header: {
      titleUpper: 'Our Working',
      titleLower: 'Process',
      text: 'Step-by-Step Guide to Achieving Your Business Goals',
    },

    items: [
      {
        title: 'Consultation',
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements',
      },
      {
        title: 'Research and Strategy Development',
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements',
      },
      {
        title: 'Implementation',
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements',
      },
      {
        title: 'Monitoring and Optimization',
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements',
      },
      {
        title: 'Reporting and Communication',
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements',
      },
      {
        title: 'Continual Improvement',
        text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements',
      },
    ],
  };
  const listTeamData = {
    header: {
      title: 'Team',
      text: 'Meet the skilled and experienced team behind our successful digital marketing strategies',
    },
    buttonText: {
      showAll: 'See All Team',
      showLess: 'Show Less',
    },

    items: [
      {
        name: 'John Smith',
        position: 'CEO and Founder',
        text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-01.png',
          alt: 'image',
        },
      },
      {
        name: 'Jane Doe',
        position: 'Director of<br>Operations',
        text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-02.png',
          alt: 'image',
        },
      },

      {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        text: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-03.png',
          alt: 'image',
        },
      },
      {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        text: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-04.png',
          alt: 'image',
        },
      },
      {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        text: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-05.png',
          alt: 'image',
        },
      },
      {
        name: 'Sarah Kim',
        position: 'Content Creator',
        text: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-06.png',
          alt: 'image',
        },
      },
      {
        name: 'John Smith',
        position: 'CEO and Founder',
        text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-01.png',
          alt: 'image',
        },
      },
      {
        name: 'John Smith',
        position: 'CEO and Founder',
        text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        icon: 'linkedin',
        image: {
          src: '/tmp/team/team-04.png',
          alt: 'image',
        },
      },
    ],
  };

  const sliderTestimonialsData = {
    header: {
      title: 'Testimonials',
      text: 'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services',
    },

    items: [
      {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      },
      {
        name: 'Jane Doe',
        position: 'Director of Operations',
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      },

      {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      },
      {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      },
      {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      },
    ],
  };

  const formMessageData = {
    header: {
      title: 'Contact Us',
      text: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
    },
    image: {
      src: '/tmp/form-01.png',
      alt: 'image',
    },
    form: {
      radioButtons: {
        radioGroup: [
          { label: 'Say Hi', value: 'say-hi', id: '1' },
          { label: 'Get a Quote', value: 'get-quote', id: '2' },
        ],
        contactType: 'say-hi',
      },

      errorMessage: 'This field is required',
      fields: [
        {
          input: {
            id: '01',
            type: 'text',
            label: 'Name',
            name: 'name',
            required: true,
            placeholder: 'Name',
          },
        },
        {
          input: {
            id: '02',
            type: 'email',
            label: 'E-mail',
            name: 'email',
            required: true,
            placeholder: 'Email',
          },
        },

        {
          input: {
            id: '03',
            type: 'textarea',
            label: 'Message',
            name: 'message',
            required: false,
            placeholder: 'Message',
          },
        },
      ],
      button: {
        text: 'Send Message',
        type: 'submit',
        theme: 'black',
      },
    },
  };
</script>
