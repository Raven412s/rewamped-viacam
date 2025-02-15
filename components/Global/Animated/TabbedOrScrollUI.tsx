"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import React from "react";

const brandingContent = (
  <div className="p-4 text-center">
    <h2 className="text-xl md:text-2xl font-bold mb-2">🔥 Digital Branding</h2>
    <p className="text-sm md:text-base">We create stunning brand identities that captivate audiences.</p>
  </div>
);

const filmProductionContent = (
  <div className="p-4 text-center">
    <h2 className="text-xl md:text-2xl font-bold mb-2">🎬 Cinematic Masterpieces</h2>
    <p className="text-sm md:text-base">High-quality film production that tells compelling stories.</p>
  </div>
);

const TabbedOrScrollingUI = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {/* Tabbed UI for Small & Medium Screens */}
      <div className="block lg:hidden w-full max-w-lg mx-auto">
        <Tabs defaultValue="branding">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="film">Film Production</TabsTrigger>
          </TabsList>
          <TabsContent value="branding">{brandingContent}</TabsContent>
          <TabsContent value="film">{filmProductionContent}</TabsContent>
        </Tabs>
      </div>

      {/* Horizontal Scroll for Large Screens */}
      <div className="hidden lg:flex w-full overflow-hidden">
        <motion.div
          className="flex space-x-12"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <div className="min-w-[50vw] flex items-center justify-center bg-blue-500 text-white p-6 rounded-lg">
            {brandingContent}
          </div>
          <div className="min-w-[50vw] flex items-center justify-center bg-red-500 text-white p-6 rounded-lg">
            {filmProductionContent}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TabbedOrScrollingUI;
