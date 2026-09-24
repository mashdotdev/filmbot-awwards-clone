import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { Table } from "../table";
import { Marquee } from "../marquee";
import { ProgressTracker } from "../progress-tracker";

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
      className="min-h-screen bg-[#f9f8f8] text-black pt-16 overflow-hidden relative second-section"
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
              src="https://images.unsplash.com/photo-1789595839936-ccc7473b5409?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              className="object-cover size-full"
            />
          </div>
          <div className="h-[20vh] w-[25vw]  lg:h-[50vh] lg:w-[25vw] overflow-hidden rounded-lg relative">
            <img
              src="https://images.unsplash.com/photo-1789369422029-ddd5643435cd?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              className="object-cover size-full"
            />
          </div>
        </div>
        <div className="h-[15vh] w-[20vw]  lg:h-[45vh] lg:w-[20vw] overflow-hidden rounded-lg relative">
          <img
            src="https://images.unsplash.com/photo-1789014538596-16dc5e095fef?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            src="https://images.unsplash.com/photo-1596468673770-99f3d7f4999f?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[50vh] w-[20vw] object-cover rounded-r-lg"
          />
        </div>
        <div
          ref={middleImageRef}
          className="h-screen w-full lg:h-[130vh] lg:w-[30vw] overflow-hidden lg:rounded-lg shrink-0 relative image-div"
        >
          <img
            src="https://images.unsplash.com/photo-1554216564-3b2db87a49d1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover size-full"
          />

          <div className="absolute bottom-12 z-10 text-white left-1/2 -translate-x-1/2 overflow-hidden">
            <h2
              className="text-center
              text-[clamp(2.5rem,4vw,5rem)]
              leading-none font-arimo tracking-tighter"
            >
              Seamless Suite
              <br /> of Features
            </h2>
            <p
              className="
                mt-12
                text-center
                text-[clamp(1rem,1.2vw,1.125rem)]  text-balance
                leading-[clamp(1.5rem,2vw,1.75rem)]
              "
            >
              By truly listening to cinema teams and valuing their insights, we{" "}
              <br />
              uncover opportunities to introduce more refined solutions, easing
              their <br />
              demanding workflows and elevating the audience experience.
            </p>
          </div>
        </div>
        <div className="w-[35vw] shrink-0 flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1574302448191-794440103170?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[70vh] w-[20vw] object-cover rounded-l-lg"
          />
        </div>
      </div>

      <div className="min-h-[50vh] bg-[#0e0c0c] text-white">
        <div className="size-full container mx-auto pt-16 md:fl-px-12/0">
          {/*Table here*/}
          <Table />

          {/*integrations*/}
          <div className="mt-32">
            <p className="text-center text-white/50 font-arimo tracking-tight">
              INTEGRATIONS
            </p>

            <Marquee />
          </div>
        </div>

        <div className="container mx-auto flex flex-col items-center">
          <p className="text-center uppercase font-arimo tracking-tighter text-[clamp(1.4rem,2vw,2rem)] leading-none">
            moviegoers rely on theater websites
          </p>
          <p className="text-center font-arimo opacity-50 mt-2">
            more than social media to find out about movies
          </p>

          <div className="mt-12 w-full md:w-2/3 2xl:w-1/3  flex flex-col gap-6 px-[clamp(1rem,2vw,0rem)]">
            <ProgressTracker text="THEATRE WEBSITES" progress={54} />
            <ProgressTracker text="SOCIAL MEDIA" progress={38} />
          </div>

          <p className="mt-12 text-xs opacity-50">
            *2025 national audience survery
          </p>
        </div>
      </div>
    </section>
  );
};
