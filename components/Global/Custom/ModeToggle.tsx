"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { theme, setTheme } = useTheme();
  const sunPath =
    "M50 69.3333C60.6775 69.3333 69.3333 60.6775 69.3333 50C69.3333 39.3225 60.6775 30.6667 50 30.6667C39.3225 30.6667 30.6667 39.3225 30.6667 50C30.6667 60.6775 39.3225 69.3333 50 69.3333Z";
  const moonPath =
    "M48 95C73.9574 95 95 73.9574 95 48C47.3454 69.7763 30.0388 44.9911 48 1C22.0426 1 1 22.0426 1 48C1 73.9574 22.0426 95 48 95Z";
  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const raysVariant = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const rayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        pathLength: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 },
      },
    },
  };
  return (
    <Button
      variant="default"
      size={"default"}
      onClick={toggleTheme}
      className={cn("flex  px-4 !h-10 m-0 w-full", className)}
    >
      <m.svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"scale-150"}
      >
        <m.path
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          animate={
            theme === "dark"
              ? {
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  rotate: 360,
                  scale: 0.95,
                  stroke: "#60a5fa",
                  fill: "#60a5fa",
                  strokeWidth: 6,
                  pathOffset: 0,
                }
              : {
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  rotate: 0,
                  stroke: "#ca8a04",
                  fill: "#ca8a04",
                  strokeWidth: 6,
                }
          }
          d={theme === "dark" ? moonPath : sunPath}
        />

        <m.g
          variants={raysVariant}
          animate={theme === "light" ? "visible" : "hidden"}
          initial="hidden"
          className="[stroke-width:6] stroke-yellow-600 [stroke-linecap:round] [stroke-line]"
        >
          <m.path
            variants={rayVariant}
            d="M15.8283 15.8283L22.6433 22.6433"
          />
          <m.path variants={rayVariant} d="M1.66667 50H11.3333" />
          <m.path
            variants={rayVariant}
            d="M22.6433 77.3567L15.8283 84.1717"
          />
          <m.path variants={rayVariant} d="M50 88.6667V98.3333" />
          <m.path
            variants={rayVariant}
            d="M77.3567 77.3567L84.1717 84.1717"
          />
          <m.path variants={rayVariant} d="M88.6667 50H98.3333" />
          <m.path
            variants={rayVariant}
            d="M84.1717 15.8283L77.3567 22.6433"
          />
          <m.path variants={rayVariant} d="M50 1.66667V11.3333" />
        </m.g>
      </m.svg>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
