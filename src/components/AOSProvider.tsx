"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    AOS.init({
      duration: mediaQuery.matches ? 0 : 920,
      delay: 0,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      once: true,
      mirror: false,
      offset: 72,
      anchorPlacement: "top-bottom",
      disable: mediaQuery.matches,
    });

    const handleMotionChange = () => {
      AOS.refreshHard();
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return null;
}
