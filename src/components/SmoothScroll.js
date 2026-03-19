"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;

      const id = target.getAttribute("href").substring(1);
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.offsetTop,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
