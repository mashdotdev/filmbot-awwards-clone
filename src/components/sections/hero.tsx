import { useEffect, useRef, useState } from "react";
import StageBgSvg from "../svg-overlay";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { CustomButton } from "../custom-button";
import { useMediaQuery } from "react-responsive";
import { useLenis } from "lenis/react";

export const Hero = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const parentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const lenis = useLenis();

  useEffect(() => {
    if (isAnimating) lenis?.stop();
    else lenis?.start();
  }, [lenis, isAnimating]);

  useGSAP(
    () => {
      if (!containerRef.current || !rightContainerRef.current) return;

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
    },
    { scope: parentRef },
  );

  return (
    <section ref={parentRef} className="realtive bg-black overflow-hidden">
      <div className="h-10 w-full  bg-black top-0 z-999"></div>
      <div
        ref={containerRef}
        className="h-screen bg-[#f9f8f8] flex flex-col-reverse lg:flex-row border-b border-black/10"
      >
        {/*left*/}
        <div
          ref={leftContainerRef}
          className="relative w-full max-w-[57.5em] max-lg:h-full overflow-hidden"
        >
          <img
            src="src\\assets\\images\\eve-1.png"
            alt=""
            className="object-cover size-full object-[20%]"
          />
          <StageBgSvg
            className="absolute inset-0 size-full svg-overlay"
            scale={isMobileOrTablet ? 2 : 1.78}
          />
        </div>
        {/*right*/}
        <div
          ref={rightContainerRef}
          className="size-full flex flex-col items-center justify-center text-black relative"
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
          <p className="font-semibold text-[4vw] md:text-[2.5vw] lg:text-[2vw] tracking-tight leading-none uppercase font-roboto text-[#171717]">
            Ticketing for the new era of
          </p>
          <h1 className="font-bold text-[12vw] md:text-[8vw] lg:text-[8.5vw] text-center leading-none uppercase font-roboto tracking-tight text-[#171717]">
            independent
            <br />
            cinemas
          </h1>
          <p className="text-[3.5vw] md:text-[2.3vw] lg:text-[1.2vw] mt-12 leading-none tracking-tight font-roboto text-[#171717]">
            More than a platform, we're your partner.
          </p>
        </div>
      </div>
    </section>
  );
};
