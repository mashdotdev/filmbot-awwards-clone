import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!leftBoxRef.current || !rightBoxRef.current) return;
      const media = gsap.matchMedia();
      media.add("(min-width: 1024px)", () => {
        // Let GSAP own both ends of the transform instead of reading Tailwind's
        // independent CSS translate property. Measure the actual grid spacing.
        const cardOffset = () =>
          leftBoxRef.current!.offsetWidth +
          parseFloat(getComputedStyle(cardsRef.current!).columnGap);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(leftBoxRef.current, { x: cardOffset }, {
          x: 0,
          duration: 1,
          ease: "power3.inOut",
        }).fromTo(
          rightBoxRef.current,
          { x: () => -cardOffset() },
          {
            x: 0,
            ease: "power3.inOut",
            duration: 1,
          },
          "<",
        );
      });
      return () => media.revert();
    },
    { scope: footerRef },
  );

  return (
    <footer className="bg-[#f9f8f8] relative overflow-hidden text-black">
      <div className="lg:min-h-[90svh] content-container section-space flex items-center justify-center flex-col">
        <p className="text-center uppercase font-roboto font-bold text-[clamp(2rem,6vw,9rem)] leading-[0.95]">
          a devoted advocate <br /> for the future of <br /> independent cinema
        </p>
        <p className="text-center max-w-3xl uppercase mt-12 lg:mt-24 text-[clamp(1rem,1vw,1.3rem)] leading-snug font-roboto">
          We believe in the vital nature of the independent cinema experience to
          connect audiences with their shared humanity. So we spearhead efforts
          to build solidarity throughout our industry, uplift the next
          generation of dedicated theater operators, and celebrate independent
          cinema as a force of cultural resonance.
        </p>
      </div>
      {/*top*/}
      <div ref={footerRef} className="page-gutter">
        <div className="border-t border-black/50">
          <div className="flex items-center justify-between py-6 min-h-20">
            <h4 className="font-roboto font-semibold uppercase text-[clamp(1.5rem,2.5vw,3.5rem)] tracking-tight leading-none">
              initiatives & projects
            </h4>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/*middle*/}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 page-gutter gap-6">
        <div
          ref={leftBoxRef}
          className="min-h-80 md:min-h-96 lg:min-h-[75svh] min-w-0 bg-red-400 rounded-lg relative p-6 xl:p-12 flex flex-col gap-16 text-white"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1618154782021-6601491cfc0b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat top/cover",
          }}
        >
          <div>
            <span className="block font-arimo">[01]</span>
            <span className="font-roboto text-lg font-semibold">
              PROUD SPONSER
            </span>
          </div>
          <h6 className="mt-auto text-[clamp(1.5rem,3vw,4rem)] font-bold font-roboto leading-none">
            LEAD SPONSOR <br /> OF AHC 2025
          </h6>
        </div>

        <div
          className="min-h-80 md:min-h-96 lg:min-h-[75svh] min-w-0 bg-black rounded-lg z-10 p-6 xl:p-12 flex flex-col gap-16 text-white"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1613592173563-cc06087dbebc?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat top/cover",
          }}
        >
          <div>
            <span className="block font-arimo">[02]</span>
            <span className="font-roboto text-lg font-semibold">
              RETURN TO THE BIG SCREEN
            </span>
          </div>
          <h6 className="mt-auto text-[clamp(1.5rem,3vw,4rem)] font-bold font-roboto leading-none">
            LOST FILMS OF <br /> COVID SERIES
          </h6>
        </div>

        <div
          ref={rightBoxRef}
          className="md:col-span-2 lg:col-span-1 min-h-80 md:min-h-96 lg:min-h-[75svh] min-w-0 bg-amber-500 rounded-lg relative p-6 xl:p-12 flex flex-col gap-16 text-white"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1507502707541-f369a3b18502?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat top/cover",
          }}
        >
          <div>
            <span className="block font-arimo">[03]</span>
            <span className="font-roboto text-lg font-semibold">
              GLOW IN THE DARK AT SHOWTIME
            </span>
          </div>
          <h6 className="mt-auto text-[clamp(1.5rem,3vw,4rem)] font-bold font-roboto leading-none">
            MOVIES <br /> NEVER DIE
          </h6>
        </div>
      </div>

      {/*bottom*/}
      <div className="page-gutter mt-12 w-full pb-8">
        <div className="flex flex-col lg:flex-row size-full justify-between gap-6 ">
          <h6 className="border-t border-black/50 flex-1 pt-6 font-semibold text-[clamp(1.5rem,1vw,1rem)] tracking-tighter font-roboto leading-none">
            7M TICKETS SOLDS <span className="text-lg">[ AND COUNTING ]</span>
          </h6>

          <div className="border-t border-black/50 flex items-start flex-wrap gap-8 flex-2 min-w-0 pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="lg:py-5 py-3 px-4 xl:px-8 bg-[#ff4040] text-black">
                BOOK A DEMO
              </div>
              <div className="lg:py-5 py-3 px-4 xl:px-8 border border-black/50 border-dashed text-black">
                CONTACT US
              </div>
              <div></div>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-[clamp(1.5rem,1vw,1rem)]  tracking-tighter font-roboto leading-none uppercase">
                hosting a film festival?
              </h6>
              <span className="uppercase opacity-50 text-lg font-roboto">
                view festivals
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col lg:ml-auto">
              <span>Privacy Policy</span>
              <span>©️ Filmbot, Inc</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
