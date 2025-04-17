import { DotBg } from '@/components/Assets/DotBg'
import React from 'react'

const Section0_1 = () => {
  return (
    <div className='hidden lg:flex  items-center justify-center lg:h-screen lg:w-screen rounded-3xl '>
        <div className="size-11/12 object-cover rounded-xl flex items-center justify-center border-[rgba(255,255,255,0.10)] dark:bg-gradient-to-bl dark:from-background/90 dark:via-gray-800 dark:to-zinc-800/95 bg-gradient-to-bl from-white/90 via-gray-300 to-zinc-300 backdrop-blur-md border
                    transition-all shadow-[2px_4px_16px_0px_rgb(225,225,225,0.1)_inset]">
            <img src="/image/viacam.png" alt="viacam" className='size-11/12 object-cover rounded-xl' />
        </div>
            <DotBg/>
    </div>
  )
}

export default Section0_1
