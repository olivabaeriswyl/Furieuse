import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const viewportWidth = window.screen.width;
const friseWidth = document.querySelector(".slider-element").offsetWidth;

gsap.to(".slider-container", {
  x: viewportWidth - friseWidth,
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    scrub: 1,
    pin: true,
  },
});
