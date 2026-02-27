"use client";

import { useState, useEffect } from "react";

interface StickyHeaderProps {
  title: string;
  description?: string;
  maxScroll?: number;
  debug?: boolean;
}

export default function StickyHeader({
  title,
  description,
  maxScroll = 150,
  debug = false,
}: StickyHeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
          setScrollProgress(progress);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);

  const headerHeight = 16 - 10 * scrollProgress;
  const titleScale = 1 - 0.33 * scrollProgress;
  const descriptionOpacity = Math.max(1 - scrollProgress * 1.5, 0);
  const contentPaddingTop = 3 * scrollProgress;

  useEffect(() => {
    if (debug) {
      console.log("=== StickyHeader 调试信息 ===");
      console.log("scrollProgress:", scrollProgress.toFixed(3));
      console.log("headerHeight:", headerHeight.toFixed(3), "rem");
      console.log("titleScale:", titleScale.toFixed(3));
      console.log("descriptionOpacity:", descriptionOpacity.toFixed(3));
      console.log("contentPaddingTop:", contentPaddingTop.toFixed(3), "rem");
      console.log("---");
    }
  }, [
    debug,
    scrollProgress,
    headerHeight,
    titleScale,
    descriptionOpacity,
    contentPaddingTop,
  ]);

  return (
    <>
      <div style={{ height: "16rem" }}></div>

      <div
        className="fixed top-16 left-0 right-0 z-20 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-800 dark:to-zinc-950 px-4 shadow-lg"
        style={{
          height: `${headerHeight}rem`,
        }}
      >
        <div
          className="mx-auto max-w-7xl h-full flex flex-col justify-center"
          style={{
            paddingTop: `${contentPaddingTop}rem`,
          }}
        >
          <h1
            className="font-bold text-white text-4xl md:text-5xl mb-4 origin-left"
            style={{
              transform: `scale(${titleScale})`,
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="text-xl text-zinc-300 max-w-2xl"
              style={{
                opacity: descriptionOpacity,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
