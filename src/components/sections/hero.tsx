import { useEffect, useRef, useState } from "react";
import StageBgSvg from "../svg-overlay";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { CustomButton } from "../custom-button";
import { useMediaQuery } from "react-responsive";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const parentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  const isMobileOrTablet = useMediaQuery({
    query: "(width < 1024px)",
  });

  const lenis = useLenis();

  useEffect(() => {
    if (isAnimating) lenis?.stop();
    else lenis?.start();
  }, [lenis, isAnimating]);

  useGSAP(
    () => {
      if (!containerRef.current || !rightContainerRef.current) return;

      const media = gsap.matchMedia();
      media.add("(min-width: 1024px)", () => {
        gsap.to(heroImageRef.current, {
          yPercent: 20,
          scrollTrigger: {
            trigger: parentRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      if (window.scrollY > 0) {
        setIsAnimating(false);
        return () => media.revert();
      }

      gsap.set(containerRef.current, {
        clipPath: "inset(0 48% 0 50%)",
        yPercent: 100,
      });
      const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });

      tl.to(containerRef.current, {
        keyframes: [
          { yPercent: 0, duration: 0.3, ease: "power3.inOut" },
          { clipPath: "inset(0 0% 0 0%)", duration: 0.7, ease: "power3.inOut" },
        ],
      });

      Array.from(rightContainerRef.current!.children).forEach((child) => {
        tl.from(
          child,
          {
            opacity: 0,
          },
          "-=0.5",
        );
      });
      return () => media.revert();
    },
    { scope: parentRef },
  );

  return (
    <section ref={parentRef} className="relative bg-black overflow-hidden">
      <div className="h-10 w-full  bg-black top-0 z-999"></div>
      <div
        ref={containerRef}
        className="min-h-svh lg:min-h-[max(40rem,100svh)] bg-[#f9f8f8] flex flex-col-reverse lg:flex-row border-b border-black/10"
      >
        {/*left*/}
        <div
          ref={leftContainerRef}
          className="relative w-full lg:w-1/2 min-h-[45svh] lg:min-h-0 overflow-hidden"
        >
          <img
            ref={heroImageRef}
            src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 object-cover size-full object-[20%] scale-110"
          />
          <StageBgSvg
            className="absolute inset-0 size-full svg-overlay"
            scale={isMobileOrTablet ? 2 : 1.78}
          />
        </div>
        {/*right*/}
        <div
          ref={rightContainerRef}
          className="w-full lg:w-1/2 min-w-0 min-h-[55svh] px-4 pt-28 pb-16 lg:py-32 flex flex-col items-center justify-center text-black relative"
        >
          <div className="flex absolute top-0 right-0">
            <CustomButton
              text="festival info"
              className="flex-1 rounded-bl-lg"
            />
            <CustomButton
              text="contact us"
              bgColor="#ff4040"
              textColor="#000000"
              className="flex-1"
            />
          </div>
          <p className="font-semibold text-[clamp(1rem,2.5vw,2.5rem)] lg:text-[clamp(1rem,2vw,2.5rem)] tracking-tight leading-tight uppercase font-roboto text-[#171717]">
            Ticketing for the new era of
          </p>
          <h1 className="font-bold text-[clamp(2.75rem,11vw,7rem)] lg:text-[clamp(4rem,8vw,11rem)] text-center leading-none uppercase font-roboto tracking-tight text-[#171717]">
            independent
            <br />
            cinemas
          </h1>
          <p className="text-[clamp(1rem,1.2vw,1.25rem)] mt-8 lg:mt-12 text-center leading-normal tracking-tight font-roboto text-[#171717]">
            More than a platform, we're your partner.
          </p>
        </div>
      </div>
    </section>
  );
};
