

export  const initializeScrollAnimations = (position = 'bottom') =>  {
    const {$gsap, $ScrollTrigger} = useNuxtApp();
    const sections = document.querySelectorAll("[data-section-parallax]");
    sections.forEach((section, i) => {
        $gsap.set(section, { zIndex: i + 1 });

        const sectionTl = $gsap.timeline().fromTo(section.previousSibling, { y: 0 }, { y: "25vh", ease: "none" });
        const itemHeight = section.previousSibling?.clientHeight || 0;
        const windowHeight = window.innerHeight;
        const startPosition = (itemHeight > windowHeight)
            ? 'bottom-=100'
            : `${itemHeight}px`;

        $ScrollTrigger.create({
            trigger: section.previousSibling,
            invalidateOnRefresh: true,
            start: `bottom ${startPosition}`,
            end: "bottom top",
            scrub: true,
            animation: sectionTl,
        });
    });
}
