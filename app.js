import { gsap } from "gsap";
    
import { RoughEase, SlowMo } from "gsap/EasePack";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger,TextPlugin,RoughEase,SlowMo);