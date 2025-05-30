import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { productionSections } from "@/data";
import { cn } from "@/lib/utils";
function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `${(productionSections.length - 1) * -100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);
  console.log(productionSections.length * 100)
  return (
    <section className="overflow-hidden ">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}
      {/* The div below act just as a trigger. As the doc suggests, the trigger and
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className={cn("h-screen  flex flex-row relative")}
            style={{
                width: `${productionSections.length * 100}vw`
            }}
        >
            {productionSections.map((section,index)=>(
          <div key={index} className="h-screen w-screen flex items-center justify-center">
            {section.component}
          </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HorizontalScroll;
