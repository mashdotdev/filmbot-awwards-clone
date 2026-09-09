import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface SVGOverlayProps {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  scale?: number;
  animate?: boolean; // set false to skip the reveal (e.g. reduced-motion, or SSR-safety)
  duration?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
  onComplete?: () => void;
}

export default function StageBgSvg({
  className,
  color,
  style,
  scale = 1.15,
  animate = true,
  duration = 0.9,
  stagger = 0.12,
  ease = "power3.out",
  delay = 0,
  onComplete,
  ...props
}: SVGOverlayProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // useLayoutEffect(() => {
  //   if (!animate || !svgRef.current) return;

  //   // respect reduced-motion preference
  //   const prefersReduced = window.matchMedia(
  //     "(prefers-reduced-motion: reduce)",
  //   ).matches;
  //   if (prefersReduced) {
  //     onComplete?.();
  //     return;
  //   }

  //   const paths = svgRef.current.querySelectorAll("path");

  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       paths,
  //       { xPercent: -100 },
  //       {
  //         xPercent: 0,
  //         duration,
  //         ease,
  //         stagger,
  //         delay,
  //         onComplete,
  //       },
  //     );
  //   }, svgRef);

  //   return () => ctx.revert();
  // }, [animate, duration, stagger, ease, delay, onComplete]);

  const cx = 460;
  const cy = 710.5;
  const groupTransform = `translate(${cx} ${cy}) scale(${scale}) translate(${-cx} ${-cy})`;

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 920 1421"
      fill="none"
      data-intro-home-svg=""
      className={`stage__bg-svg ${className}`}
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: "translate(0px, 0px)",
        color, // drives fill="currentColor" on the paths below
        overflow: "hidden", // keep the -100% start state from spilling out of view
        ...style,
      }}
      {...props}
    >
      <g transform={groupTransform}>
        <path
          d="M191.725 863.197H268.374C289.53 863.197 306.699 846.027 306.699 824.872V594.923C306.699 573.768 289.53 556.598 268.374 556.598H191.725C170.569 556.598 153.4 539.429 153.4 518.273L155.624 -43.2861H2.32472L0.100586 518.273C0.100586 539.429 17.2701 556.598 38.4254 556.598H115.075C136.23 556.598 153.4 573.768 153.4 594.923V824.872C153.4 846.027 136.23 863.197 115.075 863.197H38.4254C17.2701 863.197 0.100586 880.367 0.100586 901.522V1625.5H153.4V901.522C153.4 880.367 170.569 863.197 191.725 863.197Z"
          fill="#f9f8f8"
        />
        <path
          d="M498.726 863.197H575.375C596.531 863.197 613.7 846.028 613.7 824.872V594.923C613.7 573.768 596.531 556.598 575.375 556.598H498.726C477.57 556.598 460.401 539.429 460.401 518.274L462.625 -43.286H309.326L307.102 518.274C307.102 539.429 324.271 556.598 345.426 556.598H422.076C443.231 556.598 460.401 573.768 460.401 594.923V824.872C460.401 846.028 443.231 863.197 422.076 863.197H345.426C324.271 863.197 307.102 880.367 307.102 901.522V1625.5H460.401V901.522C460.401 880.367 477.57 863.197 498.726 863.197Z"
          fill="#f9f8f8"
        />
        <path
          d="M920.302 824.872V594.923C920.302 561.979 922.526 146.933 922.526 -43.2861H615.928L613.704 518.273C613.704 539.429 630.873 556.598 652.029 556.598H728.678C749.833 556.598 767.003 573.768 767.003 594.923V824.872C767.003 846.027 749.833 863.197 728.678 863.197H652.029C630.873 863.197 613.704 880.367 613.704 901.522L613.703 1625.5H920.302C920.302 1435.18 920.302 857.634 920.302 824.872Z"
          fill="#f9f8f8"
        />
      </g>
    </svg>
  );
}
