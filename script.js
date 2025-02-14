// Animation Timeline
const animationTimeline = () => {
  const tl = gsap.timeline();

  tl.to(".container", { visibility: "visible", duration: 0.1 })
    .from(".one", { opacity: 0, y: 50, duration: 0.8 })
    .from(".two", { opacity: 0, y: 50, duration: 0.8 }, "-=0.5")
    .from(".three", { opacity: 0, y: 50, duration: 0.8 }, "-=0.5")
    .from(".four .text-box", { opacity: 0, scale: 0.5, duration: 0.8 }, "-=0.5")
    .from(".five p", { opacity: 0, y: 50, stagger: 0.3, duration: 0.8 }, "-=0.5")
    .from(".six img", { opacity: 0, scale: 0.5, duration: 0.8 }, "-=0.5")
    .from(".seven .balloons img", { opacity: 0, y: 1000, stagger: 0.2, duration: 1.5 }, "-=0.5")
    .from(".eight svg", { opacity: 0, scale: 0, stagger: 0.2, duration: 0.8 }, "-=0.5")
    .from(".nine p", { opacity: 0, y: 50, duration: 0.8 }, "-=0.5");

  // Replay animation
  document.getElementById("replay").addEventListener("click", () => {
    tl.restart();
  });
};

animationTimeline();
