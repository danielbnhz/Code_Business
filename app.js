import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Banner animation
    gsap.from(".banner-with-text", { opacity: 0, duration: 1 });
  
    gsap.from(".stagger-item", {
    opacity: 0,
    y: 20,
    stagger: 0.3,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".intro",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
    });



});