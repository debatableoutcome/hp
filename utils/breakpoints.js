const devices = {
  md: 640,
  lg: 990,
};

const isDesktop = () =>
  window.matchMedia(`(min-width: ${devices.lg}px)`).matches;
const isMob = () =>
  window.matchMedia(`(max-width: ${devices.md - 1}px)`).matches;
const isTablet = () =>
  window.matchMedia(
    `(min-width: ${devices.md}px) and (max-width: ${devices.lg - 1}px)`
  ).matches;

export { devices, isDesktop, isMob, isTablet };
