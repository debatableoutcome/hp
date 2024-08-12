const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "360px",
      height: "960px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "1080px",
    },
  },
  fullHD: {
    name: "fullHD",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        {
          name: "white",
          value: "#fff",
        },
        {
          name: "darkteal",
          value: "#00313C",
        },
      ],
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: "desktop",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
