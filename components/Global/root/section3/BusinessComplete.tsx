"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { businessSections, productionSections } from "@/data";
import HorizontalScroll from "../../Animated/HorizontalScroll";
import NegativeHorizontalScroll from "../../Animated/NegativeHorizontalScroll";

const BusinessComplete = () => {

  return (
    <div className="relative w-full">
      {/* Tabbed UI for Small & Medium Screens */}
      <div className="block lg:hidden p-4">
        <Tabs defaultValue="branding">
          <TabsList className="grid grid-cols-3">
            {businessSections.map((section) => section.title ? (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title.split(" ")[1]}
              </TabsTrigger>
            ) : null)}
          </TabsList>
          {productionSections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              {section.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>

    {/* Horizontal scroll section for Large screens */}
    <div className="hidden lg:block   relative z-10 ">
    <NegativeHorizontalScroll />
    </div>

    </div>
  );
};

export default BusinessComplete;
