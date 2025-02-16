import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smooth: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      lerp: 0.05,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
