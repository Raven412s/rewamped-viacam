"use client"
import React from 'react'
import StyledButton from '../../Custom/StyledButton'
import Stars from '@/components/Assets/Stars'

interface HeroHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  }
const HeroHeadlineWithSubHeadingAndGlow = (props: HeroHeadingProps) => {

  return (
    <div className="relative py-20 overflow-hidden">
<div className='flex flex-col items-center '>
            <div className='flex relative items-center justify-center   '> {/*before:content-center before:bg-foreground/20 before:-z-10 before:w-[585px] before:h-full dark:before:blur-[45px] before:blur-[35px] before:absolute before:top-8*/}
            <h1 className="font-empower text-5xl w-full text-center ">Empowering <span className="font-body bg-gradient-to-tr from-foreground to-background bg-clip-text text-transparent">Brands</span> with <br /><span className="font-innovative bg-gradient-to-tr from-foreground to-background bg-clip-text text-transparent">Innovation</span>  <span className="font-serif">&</span> <span className="font-strategy bg-gradient-to-r from-[#cf9781] to-[#373737] bg-clip-text text-transparent">Strategy</span>
            </h1>
           </div>
    <p className='font-body text-gray-400 text-center mt-5 leading-tight text-lg '>From branding and marketing to web development, design, and <br />printing—we craft solutions that drive corporate growth.</p>
    <StyledButton onClick={() => alert("hello")} className='mt-8 px-6 py-3 rounded-full  before:rounded-full'>
        Contact Now
    </StyledButton>

</div>
<Stars  className=' animate-rotation pointer-events-none  absolute -z-50 top-0 ml-36 -mt-10 scale-75  '/>
    </div>
  )
}

export default HeroHeadlineWithSubHeadingAndGlow
