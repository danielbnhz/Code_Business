import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


gsap.from(".banner-with-text", { opacity: 0, duration: 1 })
.fromto(".banner-with-text",{ opacity: 1, duration: 5   });

let intro = document.querySelector(".intro")

gsap.to(intro, {
    y: 55,
    stagger: {
        // wrap advanced options in an object
        each: 0.4,
        grid: 'auto',
        repeat: -1
    }
});