import { cn } from '@/lib/utils'
import React, { ComponentPropsWithoutRef } from 'react'
import Marquee from "react-fast-marquee"
interface Props extends ComponentPropsWithoutRef<"div"> {
    textArray: string[],
}

const MarqueeText = (props: Props) => {
    const {textArray, className, ...rest} = props
  return (
    <div className={cn("relative mt-6 overflow-hidden",className)} {...rest}>
    {/* Vignette Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 pointer-events-none z-10" />

    <Marquee speed={50} gradient={false} pauseOnHover>
      {textArray.map((text, index) => (
        <h1 key={index} className="text-4xl uppercase font-bold  text-foreground mx-6">
          {text}
        </h1>
      ))}
    </Marquee>
  </div>
  )
}

export default MarqueeText
