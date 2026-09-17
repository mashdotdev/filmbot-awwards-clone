import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ThirdSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      const splitHeading = SplitText.create(headingRef.current, {
        type: "words",
        autoSplit: true,
      });
      const headingRevealTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingContainerRef.current,
          start: "top 70%",
        },
      });

      headingRevealTl
        .to(headingContainerRef.current, {
          clipPath: "inset(0 0% 0 0%)",
          duration: 0.5,
        })
        .from(
          splitHeading.words,
          {
            scale: 0,
            stagger: 0.4,
            duration: 0.8,
          },
          "-=1.2",
        );
    },
    { scope: parentRef },
  );

  return (
    <section
      ref={parentRef}
      className="min-h-screen bg-[#0e0c0c] text-white pt-24"
    >
      <div
        ref={headingContainerRef}
        className="overflow-hidden w-fit mx-auto relative"
        style={{
          clipPath: "inset(0% 47% 0% 53%)",
        }}
      >
        <h1
          ref={headingRef}
          className="text-center font-bold font-roboto
          text-[clamp(3rem,6vw,12rem)] leading-none"
        >
          BOLD <br /> WEBSITES
        </h1>
      </div>
    </section>
  );
};
