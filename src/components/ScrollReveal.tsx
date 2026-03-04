"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const fades = document.querySelectorAll(".fade");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      fades.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      fades.forEach((el) => el.classList.add("in"));
    }
  }, []);

  return null;
}