import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(
    () => {
      if (!leftBoxRef.current || !rightBoxRef.current) return;
      if (isMobile) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
        },
      });

      tl.to(leftBoxRef.current, { x: 0, duration: 1, ease: "power3.inOut" }).to(
        rightBoxRef.current,
        {
          x: 0,
          ease: "power3.inOut",
          duration: 1,
        },
        "<",
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="min-h-screen bg-[#f9f8f8] relative overflow-hidden text-black"
    >
      {/*top*/}
      <div className="px-12">
        <div className="flex items-center justify-between h-[10vh]">
          <h4 className="font-roboto font-semibold uppercase text-[clamp(1.5rem,2.5vw,3.5rem)] tracking-tight leading-none">
            initiatives & projects
          </h4>
          <div>
            <div></div>
          </div>
        </div>
      </div>

      {/*middle*/}
      <div className="h-[50vh] lg:h-[75vh] flex pl-12 gap-6">
        <div
          ref={leftBoxRef}
          className="h-full bg-red-400 lg:w-[33vw] shrink-0 rounded-lg relative lg:translate-x-[34vw] p-12 flex flex-col text-white"
          style={{
            background: "url(src/assets/images/ft1.avif) no-repeat top/cover",
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
          className="h-full bg-black lg:w-[33vw] shrink-0 rounded-lg z-10 p-12 flex flex-col text-white"
          style={{
            background: "url(src/assets/images/ft2.avif) no-repeat top/cover",
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
          className="h-full bg-amber-500 lg:w-[33vw] shrink-0 rounded-lg relative lg:-translate-x-[34vw] p-12 flex flex-col text-white"
          style={{
            background: "url(src/assets/images/ft3.avif) no-repeat top/cover",
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
      <div className="px-12 mt-12 size-full max-md:min-h-fit">
        <div className="flex flex-col lg:flex-row size-full justify-between gap-6 ">
          <h6 className="border-t border-black/50 flex-1 pt-6 font-semibold text-[clamp(1.5rem,1vw,1rem)] tracking-tighter font-roboto leading-none">
            7M TICKETS SOLDS <span className="text-lg">[ AND COUNTING ]</span>
          </h6>

          <div className="border-t border-black/50 flex lg:items-center justify-around flex-col lg:flex-row flex-2 pt-6">
            <div className="">buttons</div>
            <div className="flex flex-col gap-2 max-md:my-12 ml-auto">
              <h6 className="font-semibold text-[clamp(1.5rem,1vw,1rem)]  tracking-tighter font-roboto leading-none uppercase">
                hosting a film festival?
              </h6>
              <span className="uppercase opacity-50 text-lg font-roboto">
                view festivals
              </span>
            </div>
            <div className="flex flex-col max-md:flex-row max-md:justify-between ml-auto">
              <span>Privacy Policy</span>
              <span>©️ Filmbot, Inc</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
