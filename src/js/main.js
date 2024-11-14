import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/*Scroll horizontal*/
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

/*Scroll jusqu'en haut de page -> pour qu'il revienne à l'endroit de base*/
document
  .querySelector("#scroll-to-top")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

/*Apparition des éléments histoire depuis les côtés*/
gsap.from("#face-baron-first", {
  x: "-700px",
  duration: 1,
  scrollTrigger: { trigger: "#margin-story-small", start: "top center" },
});

gsap.from("#face-baron-second", {
  x: "600px",
  duration: 1,
  scrollTrigger: { trigger: "#animation-java-parent-2", start: "top center" },
});

gsap.from("#face-baron-third", {
  x: "650px",
  duration: 1,
  scrollTrigger: { trigger: "#margin-story-big", start: "top center" },
});

gsap.from("#face-baron-fourth", {
  x: "-600px",
  duration: 1,
  scrollTrigger: { trigger: "#img-margin-edge-story", start: "top center" },
});
