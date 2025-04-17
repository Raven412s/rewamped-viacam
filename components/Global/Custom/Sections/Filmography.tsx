import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../Logo'
import { Separator } from '@/components/ui/separator'
import { Glow, GlowArea } from '../../Animated/Glow'
import { filmographyCardData } from '@/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DotBg } from '@/components/Assets/DotBg'

type Props = {}

const Filmography = (props: Props) => {
  return (
    <div className="border-2 rounded-2xl lg:h-screen bottom-0 overflow-hidden flex flex-col relative mx-4 bg-dot-background backdrop-blur-[1px]  ">
      <div className="flex flex-col gap-1  relative z-20 border-[rgba(255,255,255,0.10)] dark:bg-gradient-to-bl dark:from-background/90 dark:via-gray-800 dark:to-zinc-800/95 bg-gradient-to-bl from-white/90 via-gray-300 to-zinc-300 backdrop-blur-md border
                    transition-all shadow-[2px_4px_16px_0px_rgb(225,225,225,0.1)_inset]">
        <div className="flex justify-between items-center py-3 px-5">
          <h1 className="font-black uppercase font-display text-xl sm:text-2xl md:text-3xl">
            filmography services
          </h1>
          {/* <Logo /> */}
        </div>
        <Separator />
      </div>

      {/* Content Wrapper with scrollable area if needed */}
      <div className=" pt-4 px-5  z-20  min-w-screen h-full">
        <div className="space-y-5 md:space-y-7 lg:space-y-4  relative ">
        <div className="flex flex-col lg:justify-center lg:items-end w-full space-y-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight lg:text-right lg:w-1/3">
        Cinematic Storytelling <br className='lg:block hidden' /> That Captivates & Inspires!
        </h1>
        <div className=" lg:flex flex-row-reverse w-full">
        <p className="text-xs sm:text-sm md:text-base lg:w-2/6 lg:text-right text-muted-foreground dark:brightness-150">
        From short films to web series, advertisements to documentaries, we craft visually stunning, emotionally powerful content that resonates with audiences. Whether you're looking to tell a compelling story, promote your brand, or create an impactful documentary, our expert team is here to bring your vision to life. Let’s turn your ideas into breathtaking cinematic experiences!
        </p>
        <div className="hidden lg:block lg:w-3/5"></div>
        </div>
        </div>
        {/* Cards Section */}
        <GlowArea className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 bottom-2 px-4 w-full absolute ">
          {filmographyCardData.map((cardData, index) => (
            <Glow key={index} className="rounded-xl h-full hover:-translate-y-3 ease-in-out duration-200" color="#90E0EF">
              <Card className="size-full rounded-xl flex flex-col justify-between border-[rgba(255,255,255,0.10)] dark:bg-gradient-to-bl dark:from-background/90 dark:via-gray-800 dark:to-zinc-800/95 bg-gradient-to-bl from-white/90 via-gray-300 to-zinc-300 backdrop-blur-md border
                    transition-all shadow-[2px_4px_16px_0px_rgb(225,225,225,0.1)_inset]">
                <CardContent className="p-3 sm:p-5 flex-grow space-y-4">
                    <div className="relative group rounded-xl overflow-hidden aspect-video">
                    <div className="absolute top-0 left-0 z-10 inset-0 w-full h-full brightness-75 opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0" style={{ filter: "url(#grains)" }} />
                            <img
                            src={cardData.initialImage}
                            alt={cardData.h1}
                            className="w-full h-auto brightness-100 "
                            />

                      <video
                        className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                        controls
                      >
                        {cardData.dedicatedVideo.map((src,index)=>(
                            <source src={src} key={index} type={index === 0 ? "video/webp" : "video/mp4"} />
                        ))}
                      </video>

                    </div>
                    <CardTitle><h1 className='w-full  text-left'>{cardData.h1}</h1></CardTitle>
                    <CardDescription>
                    {cardData.description}
                    </CardDescription>
                </CardContent>
              </Card>
            </Glow>
          ))}
        </GlowArea>
        </div>


      </div>

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

export default Filmography
