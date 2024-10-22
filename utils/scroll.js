export const disableScroll = () => {
  const scrollY = window.pageYOffset;
  const { body } = document;
  body.classList.add("js-locked");
  document.documentElement.classList.add("is-locked");
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.width = "100%";
};

export const enableScroll = () => {
  const { body } = document;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  body.classList.remove("js-locked");
  document.documentElement.classList.remove("is-locked");
  // restore scroll position
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};
