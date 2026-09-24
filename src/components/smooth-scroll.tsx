import ReactLenis, { type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", ScrollTrigger.update);
    let active = true;
    // Web fonts can change text wrapping after the triggers are created.
    void document.fonts.ready.then(() => {
      if (active) ScrollTrigger.refresh();
    });

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
      active = false;
    };
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={{ autoRaf: false }}>
      {children}
    </ReactLenis>
  );
};
