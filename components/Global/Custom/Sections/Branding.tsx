import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../Logo'
import { Separator } from '@/components/ui/separator'
import { Glow, GlowArea } from '../../Animated/Glow'
import { brandingCardData } from '@/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DotBg } from '@/components/Assets/DotBg'

type Props = {}

const Branding = (props: Props) => {
  return (
    <div className="border-2 rounded-2xl lg:h-screen bottom-0 overflow-hidden flex flex-col relative mx-4  ">
      <div className="flex flex-col gap-1  relative z-20 border-[rgba(255,255,255,0.10)] dark:bg-gradient-to-bl dark:from-background/90 dark:via-gray-800 dark:to-zinc-800/95 bg-gradient-to-bl from-white/90 via-gray-300 to-zinc-300 backdrop-blur-md border
                    transition-all shadow-[2px_4px_16px_0px_rgb(225,225,225,0.1)_inset]">
        <div className="flex justify-between items-center py-3 px-5">
          <h1 className="font-black uppercase font-display text-xl sm:text-2xl md:text-3xl">
            Branding services
          </h1>
          <Logo />
        </div>
        <Separator />
      </div>

      {/* Content Wrapper with scrollable area if needed */}
      <div className=" pt-4 px-5 relative z-20 space-y-20">
        <div className="space-y-4 relative">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
          Elevate Your Brand with <br className="hidden sm:block" /> Powerful Digital Experiences!
        </h1>
        <div className="flex">
        <p className="text-xs sm:text-sm md:text-base w-3/5 text-left text-muted-foreground">
          In today's fast-paced digital world, your brand's online presence matters more than ever.
          We specialize in crafting high-impact branding solutions that drive engagement, boost visibility,
          and create lasting impressions. From social media branding and content creation to professional
          photography & filmography, we bring your vision to life. Whether you’re a business looking to scale
          or an individual wanting to create a personal brand, we've got you covered!
        </p>
        <div className='w-2/5  h-56 absolute right-0 top-0 rounded-2xl  border-[rgba(255,255,255,0.10)] dark:bg-gradient-to-bl dark:from-background/90 dark:via-gray-800 dark:to-zinc-800/95 bg-gradient-to-bl from-white/90 via-gray-300 to-zinc-300 backdrop-blur-md border
                    transition-all shadow-[2px_4px_16px_0px_rgb(225,225,225,0.1)_inset]'>

        </div>
        </div>
        </div>

        {/* Cards Section */}
        <GlowArea className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bottom-0.5 absolute ">
          {brandingCardData.map((cardData, index) => (
            <Glow key={index} className="rounded-xl" color="#90E0EF">
              <Card className="size-full rounded-xl flex flex-col justify-between h-full border-[rgba(255,255,255,0.10)] dark:bg-gradient-to-bl dark:from-background/90 dark:via-gray-800 dark:to-zinc-800/95 bg-gradient-to-bl from-white/90 via-gray-300 to-zinc-300 backdrop-blur-md border
                    transition-all shadow-[2px_4px_16px_0px_rgb(225,225,225,0.1)_inset]">
                <CardContent className="p-3 sm:p-5 flex-grow">
                  <ul className='list-outside list-decimal px-3 lg:list-none lg:p-0'>
                    {cardData.listItems.map((li, index) => (
                      <li key={index} className="text-xs sm:text-sm md:text-base text-muted-foreground">
                        {li}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardHeader className="border-t-2 self-end w-full max-h-max">
                  <CardTitle className="text-sm sm:text-base md:text-lg !leading-3">{cardData.h1}</CardTitle>
                </CardHeader>
              </Card>
            </Glow>
          ))}
        </GlowArea>
      </div>
        <DotBg/>

      {/* Animated gradient underlays with position swapping */}
      <motion.div
        className="w-[45%] max-w-[800px] h-[400px] blur-[60px] rounded-full bg-gradient-to-r opacity-55 from-skintone to-aqua absolute -z-10"
        animate={{ scale: [1, 1.6, 1], x: [0, -30, 30, 0], y: [0, -30, 30, 0], rotate: ["0deg","180deg","360deg"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-[45%] max-w-[400px] h-[200px] blur-[30px] bottom-0 right-0 rounded-full bg-gradient-to-r opacity-55 from-skintone to-aqua absolute -z-10"
        animate={{ scale: [1, 1.4, 1], x: [0, 30, -30, 0], y: [0, 30, -30, 0], rotate: ["0deg","180deg","360deg"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

export default Branding
