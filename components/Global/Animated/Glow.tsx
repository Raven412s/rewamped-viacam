"use client";
import { cn } from "@/lib/utils";
import { GlowAreaProps, GlowProps } from "@/types";
import React, { ComponentPropsWithoutRef, CSSProperties, useEffect, useRef } from "react";
import { handleMouseMove, handleMouseLeave, updateGlow } from "@/Functions"; // Import functions

export const GlowArea = (props: GlowAreaProps) => {
  const { className = "", size = 300, ...rest } = props;
  const element = useRef<HTMLDivElement>(null);
  const frameId = useRef<number | null>(null);
  const latestCoords = useRef<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={element}
      style={
        {
          position: "relative",
          "--glow-size": `${size}px`,
        } as CSSProperties
      }
      onMouseMove={(e) => handleMouseMove(e, latestCoords, frameId, () => updateGlow(latestCoords, element, frameId))}
      onMouseLeave={handleMouseLeave}
      className={cn(className, "")}
      {...rest}
    />
  );
};

GlowArea.displayName = "GlowArea";

export const Glow = (props: GlowProps) => {
    const { className, color = "blue", children, ...rest } = props;
    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (element.current) {
        element.current.style.setProperty("--glow-top", `${element.current.offsetTop}px`);
        element.current.style.setProperty("--glow-left", `${element.current.offsetLeft}px`);
      }
    }, []);

    return (
      <div ref={element} className={cn(className, "relative shadow-behind")}>
        <div
          {...rest}
          style={{
            backgroundImage: `radial-gradient(
              var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
              calc(var(--glow-y, -99999px) - var(--glow-top, 0px)),
              ${color} 0%,
              transparent 100%
            )`,
          }}
          className={cn(
            className,
            "absolute pointer-events-none inset-0 dark:mix-blend-lighten mix-blend-multiply after:content-[''] after:absolute after:bg-background/80 after:inset-0.5 after:rounded-[inherit] ",
          )}
        ></div>
        {children}
      </div>
    );
  };

  Glow.displayName = "Glow";
