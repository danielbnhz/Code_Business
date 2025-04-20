import { gsap } from "gsap";



gsap.from(".banner-with-text", { opacity: 0, duration: 1 })
.fromto(".banner-with-text",{ opacity: 1, duration: 5   });

