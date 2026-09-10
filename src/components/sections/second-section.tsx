import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export const SecondSection = () => {
  const parentContainerRef = useRef(null);
  const containerRef = useRef(null);
  const middleImageRef = useRef(null);

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(
    () => {
      if (!containerRef.current || !middleImageRef.current) return;

      if (!isMobileOrTablet) {
        gsap.to(middleImageRef.current, {
          width: "100vw",
          duration: 1,
          borderRadius: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "center 30%",
            scrub: true,
          },
        });
      }
    },
    { scope: parentContainerRef },
  );

  return (
    <section
      ref={parentContainerRef}
      className="min-h-screen bg-[#f9f8f8] text-black pt-16 overflow-hidden"
    >
      {/*texts*/}
      <div className="px-8 md:px-12 lg:px-24">
        <span className="font-arimo uppercase text-2xl tracking-tight">
          empower your team . impress your audience
        </span>

        <p className="mt-44 text-[3.5vw] leading-[3.7vw] tracking-tight font-arimo">
          This is a time of rebirth for collective film culture.
        </p>
        <p className="text-[3.5vw] leading-[3.7vw] tracking-tight opacity-50 font-arimo">
          {/*<br />*/}
          We empower the cinema teams leading this <br /> movement with a modern
          point-of-sale system <br /> designed for ease and versatility.
        </p>

        <p className="mt-44 font-arimo uppercase text-2xl tracking-tight">
          Crafted in collaborationwith those <br /> restoring the spirit of
          community around film
        </p>
      </div>

      {/*first three images*/}
      <div className="flex justify-between mt-44 pr-2 md:pr-6 lg:pr-12">
        <div className="flex gap-4 lg:gap-8">
          <div className="h-[35vh] w-[40vw] lg:h-[75vh] lg:w-[25vw] relative rounded-r-lg overflow-hidden">
            <img
              src="src\\assets\\images\\tile-image-1.jpg"
              alt="image"
              className="object-cover size-full"
            />
          </div>
          <div className="h-[20vh] w-[25vw]   lg:h-[50vh] lg:w-[25vw] overflow-hidden rounded-lg relative">
            <img
              src="src\\assets\\images\\tile-image-2.webp"
              alt="image"
              className="object-cover size-full"
            />
          </div>
        </div>
        <div className="h-[15vh] w-[20vw]  lg:h-[45vh] lg:w-[20vw] overflow-hidden rounded-lg relative">
          <img
            src="src\\assets\\images\\tile-image-2.webp"
            alt="image"
            className="object-cover size-full"
          />
        </div>
      </div>

      {/*second three images*/}
      <div
        ref={containerRef}
        className="mt-24 flex justify-center shrink-0 whitespace-nowrap flex-nowrap"
      >
        <div className="w-[35vw] pt-44 overflow-hidden shrink-0">
          <img
            src="src\\assets\\images\\tile-image-3.webp"
            alt=""
            className="h-[50vh] w-[20vw] object-cover rounded-r-lg"
          />
        </div>
        <div
          ref={middleImageRef}
          className="h-screen w-full lg:h-[130vh] lg:w-[30vw] overflow-hidden lg:rounded-lg shrink-0 relative"
        >
          <img
            src="src\\assets\\images\\second-main-image.webp"
            alt=""
            className="object-cover size-full"
          />

          <div className="absolute bottom-12 z-10 text-white left-1/2 -translate-x-1/2 overflow-hidden">
            <h2 className="text-center text-[4vw] leading-none font-arimo tracking-tighter">
              Seamless Suite
              <br /> of Features
            </h2>
            <p className="text-center mt-12 text-[1vw] leading-[1.2vw]">
              By truly listening to cinema teams and valuing their insights, we{" "}
              <br />
              uncover opportunities to introduce more refined solutions, easing
              their <br /> demanding workflows and elevating the audience
              experience.
            </p>
          </div>
        </div>
        <div className="w-[35vw] shrink-0 flex justify-end">
          <img
            src="src\\assets\\images\\tile-image-4.webp"
            alt=""
            className="h-[70vh] w-[20vw] object-cover rounded-l-lg"
          />
        </div>
      </div>

      <div className="h-screen bg-[#0e0c0c] text-white"></div>
    </section>
  );
};
