"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HorizontalScroll from "../Animated/HorizontalScroll";
import { productionSections } from "@/data";



const TabbedOrScrollingUI = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]); // Moves sections left

  return (
    <div className="relative w-full">
      {/* Tabbed UI for Small & Medium Screens */}
      <div className="block lg:hidden p-4">
        <Tabs defaultValue="branding">
          <TabsList className="grid grid-cols-3">
            {productionSections.map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title.split(" ")[1]}
              </TabsTrigger>
            ))}
          </TabsList>
          {productionSections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              {section.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>

    {/* Horizontal scroll section for Large screens */}
    <div className="hidden lg:block   relative z-[200] ">
    <HorizontalScroll />
    </div>

    </div>
  );
};

export default TabbedOrScrollingUI;
