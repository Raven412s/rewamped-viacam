import { cn } from '@/lib/utils'
import React from 'react'
import Logo from '../../Custom/Logo'
import { Separator } from '@/components/ui/separator'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Glow, GlowArea } from '../../Animated/Glow'

const BentoGrid = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="relative flex w-full mx-auto ">
      <GlowArea className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 ">
        {/* Logo Section (Moves above What We Do in Single Column) */}
        <Glow className="rounded-xl size-full order-1 sm:order-1 lg:order-2" color='#A47866'>
          <Card className='flex items-center justify-center bg-background/85 size-full'>
            <CardContent className="flex items-center size-full justify-center p-10">
              <Logo className="size-full" />
            </CardContent>
          </Card>
        </Glow>

        {/* What We Do Section (Moves below Logo in Single Column) */}
        <Glow color='#90E0EF' className="lg:col-span-2 rounded-xl order-2 sm:order-2 lg:order-1">
          <Card className='flex flex-col bg-background/85 size-full'>
            <CardHeader>
              <h1 className="font-display font-semibold text-3xl">What We Do?</h1>
              <Separator className="bg-foreground/20" />
            </CardHeader>
            <CardContent>
              <p className="font-body text-lg leading-tight text-muted-foreground">
                At Viacam Productions, we blend creativity with technology to craft innovative solutions that elevate brands. Our team of experts is dedicated to delivering extraordinary products and services that go beyond expectations.
                <br /><br />
                We don’t just meet your needs—we dive deep to understand your vision, ensuring strategic alignment with your goals. Using cutting-edge technology, data-driven insights, and compelling storytelling, we create engaging content that transforms audiences into loyal customers.
                <br /><br />
                From brand development to digital marketing, we offer a powerhouse of expertise to help you stand out in the competitive marketplace. Partner with us to turn your ideas into reality and redefine industry standards with creativity and precision.
              </p>
            </CardContent>
          </Card>
        </Glow>

        {/* Image Section (Moves above Production Card in Single Column) */}
        <Glow className="rounded-xl lg:col-span-2 relative order-3 sm:order-3 lg:order-4" color='#90E0EF'>
          <Card className='overflow-hidden bg-background/85 size-full'>
            <CardContent className="p-0 relative">
              <img src="/image/production1.png" alt="Production scene from a web series shoot" className="-hue-rotate-45 saturate-50 w-full object-cover" />
              <div className="absolute z-20 bg-gradient-to-b from-transparent to-neutral-950 h-full w-full bottom-0"></div>
            </CardContent>
          </Card>
        </Glow>

        {/* Production Services (Moves below Image in Single Column) */}
        <Glow className="rounded-xl order-4 sm:order-4 lg:order-3" color='#A47866'>
          <Card className='flex flex-col bg-background/85 size-full'>
            <CardHeader>
              <h2 className="font-display font-semibold text-2xl">Our Production Services</h2>
              <Separator className="bg-foreground/20" />
            </CardHeader>
            <CardContent>
              <p className="font-body text-lg text-muted-foreground">
                At Viacam Productions, we specialize in high-quality content creation, from concept development to final production.
                Our services include video production, commercial shoots, brand storytelling, and digital content creation tailored to your vision.
                With cutting-edge equipment and a skilled creative team, we bring ideas to life with precision and impact.
                Whether it's a cinematic ad, a corporate film, or a dynamic social media campaign, we ensure every frame tells a compelling story.
              </p>
            </CardContent>
          </Card>
        </Glow>

      </GlowArea>

      {/* Background Gradient Blur (Moves to Center in Large Screens) */}
      <div className="w-[90%] max-w-[800px] h-[400px] blur-[120px] rounded-full bg-gradient-to-r from-skintone to-aqua absolute -z-10 left-1/2 transition-all
        top-36 lg:top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

export default BentoGrid
