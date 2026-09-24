import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import theatreImage from "../../assets/images/theatre.webp";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ThirdSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingContainerRef = useRef<HTMLDivElement>(null);
  const overlayImageRef = useRef<HTMLImageElement>(null);
  const theatreDivRef = useRef<HTMLDivElement>(null);

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

      gsap.to(overlayImageRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: theatreDivRef.current,
          start: "top top",
          end: "60% center",
          scrub: true,
        },
      });
      return () => splitHeading.revert();
    },
    { scope: parentRef },
  );

  return (
    <section
      ref={parentRef}
      className="bg-[#0e0c0c] text-white pt-[var(--section-space)] overflow-hidden relative theatre-section"
    >
      <div ref={theatreDivRef} className="relative min-h-[max(48rem,130svh)] flex flex-col justify-between gap-24 pb-12 overflow-hidden">
        <div
          ref={headingContainerRef}
          className="overflow-hidden w-fit mx-auto relative z-10"
          style={{
            clipPath: "inset(0% 47% 0% 53%)",
          }}
        >
          <h1
            ref={headingRef}
            className="text-center font-bold font-roboto
          text-[clamp(3.5rem,12vw,15rem)] leading-none"
          >
            BOLD <br /> WEBSITES
          </h1>
          <h2 className="text-center mt-8 uppercase font-roboto font-semibold">
            from digital screens <br /> to the big screen
          </h2>
        </div>

        <img
          src={theatreImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <img
          ref={overlayImageRef}
          src="https://images.unsplash.com/photo-1700519144404-b39e522136e3?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute h-[67%] w-[82%] rounded-lg object-cover z-5 left-2/4 -translate-x-2/4 brightness-60 top-3 opacity-0"
        />

        <div className="z-10 relative content-container">
          <p className="text-center max-w-[52ch] mx-auto font-arimo text-[clamp(1rem,2vw,3rem)] tracking-tight leading-snug [&_br]:hidden lg:[&_br]:block">
            Captivate audience with bold immersive layouts that <br /> celebrate
            the art of curation through visual tracks of <br /> new releases,
            repertory titles, film series, <br /> retrospectives, and special
            evens.
          </p>
          <p className="mt-12 text-center mx-auto max-w-lg opacity-50 text-xs">
            Evoke the style, history, and ambience of your distinct physical
            space. Designed for navigation on any device, ensure interest
            becomes action with a refreshingly easy ticket checkout experience
            featuring Apple Pay and Google Pay.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-[#0e0c0c]/90 z-4" />
    </section>
  );
};
