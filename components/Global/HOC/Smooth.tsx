"use client";

import { PropsWithChildren, ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps extends PropsWithChildren{
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
