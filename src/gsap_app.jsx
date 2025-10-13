import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapApp() {
  useEffect(() => {
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

    gsap.from(".carousel", {
      scrollTrigger: {
        trigger: ".carousel",
        start: "top 80%",
      },
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      ease: "power2.out"
    });

  }, []); 
  return (
    <div>
      <section className="intro">
        <div className="banner-with-text">Welcome!</div>
        <div className="stagger-item">Item 1</div>
        <div className="stagger-item">Item 2</div>
        <div className="stagger-item">Item 3</div>
      </section>

      <div className="carousel">
        <img src="https://via.placeholder.com/150?text=1" alt="Image 1" />
        <img src="https://via.placeholder.com/150?text=2" alt="Image 2" />
        <img src="https://via.placeholder.com/150?text=3" alt="Image 3" />
      </div>
    </div>
  );
}
