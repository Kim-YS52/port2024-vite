import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port(){
    gsap.registerPlugin(ScrollTrigger);
    const horSection=gsap.utils.toArray(".port__item");
    
    gsap.to(horSection,{
        xPercent:-120*(horSection.length-1),
        ease:"none",
        scrollTrigger: {
           trigger:"#port",
           start:"top 56px",
           end:"+=3000",
           scrub:1,
           pin:true,
           markers:false,
           invalidateOnRefresh:true,
           anticipatePin:1,
        },
    });
}