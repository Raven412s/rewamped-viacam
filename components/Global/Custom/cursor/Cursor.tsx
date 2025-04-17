"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: x - 8,
          y: y - 8,
          duration: 0.1,
          ease: "power2.out",
        });
      }

      if (followerRef.current) {
        gsap.to(followerRef.current, {
          x: x - 10,
          y: y - 10,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    document.addEventListener("mousemove", moveCursor);

    // Add event listeners to anchor tags and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`hidden lg:flex items-center justify-center w-4 h-4 rounded-full fixed pointer-events-none mix-blend-difference bg-aqua z-[999] transition-transform duration-200 ease-out ${
          hovering ? "w-12 h-12 scale-150 bg-transparent border-2 border-aqua" : ""
        }`}
        style={{ top: 0, left: 0 }}
      >
        {hovering && <span className="text-xs font-bold text-aqua">Click</span>}
      </div>

      {/* Follower Cursor (Trailing Effect) */}
      <div
        ref={followerRef}
        className="hidden lg:block w-5 h-5 rounded-full fixed pointer-events-none bg-aqua opacity-30 blur-md z-[998] transition-transform duration-300 ease-out"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
