import React from 'react'

const HeroHeading = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-start p-4 gap-4">
    <span className='border text-sm  text-muted-foreground py-0.5 px-3 rounded-full font-semibold'>Production</span>
    <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center uppercase leading-tight">
      <strong className="leading-tight">
        Bringing Your{" "}
        <span className="relative inline-block leading-tight">
          <video
            autoPlay
            muted
            loop
            className="absolute z-[1] w-full h-full top-0 left-0 object-cover dark:hue-rotate-180 dark:brightness-200"
          >
            <source src="/videos/blue.webm" type="video/webm" />
            <source src="/videos/blue.mp4" type="video/mp4" />
          </video>
          <span className="relative z-10 mix-blend-lighten dark:mix-blend-multiply bg-background dark:bg-[#0a0a0a] text-black dark:text-white ">
            Vision
          </span>
        </span>{" "}
        to Life
        <br />
        From Digital{" "}
        <span className="relative inline-block leading-tight">
          <video
            autoPlay
            muted
            loop
            className="absolute z-[1] w-full h-full top-0 left-0 object-cover dark:hue-rotate-180 dark:brightness-200"
          >
            <source src="/videos/blue.webm" type="video/webm" />
            <source src="/videos/blue.mp4" type="video/mp4" />
          </video>
          <span className="relative z-10 mix-blend-lighten dark:mix-blend-multiply bg-background dark:bg-[#0a0a0a] text-black dark:text-white ">
            Branding
          </span>
        </span>{" "}
        to
        <br />
        <span className="relative inline-block leading-tight">
          <video
            autoPlay
            muted
            loop
            className="absolute z-[1] w-full h-full top-0 left-0 object-cover dark:hue-rotate-180 dark:brightness-200"
          >
            <source src="/videos/blue.webm" type="video/webm" />
            <source src="/videos/blue.mp4" type="video/mp4" />
          </video>
          <span className="relative z-10 mix-blend-lighten dark:mix-blend-multiply bg-background dark:bg-[#0a0a0a] text-black dark:text-white ">
            Cinematic Masterpieces!
          </span>
        </span>
      </strong>
    </h1>
    <p  className='text-xs text-center text-muted-foreground'>Crafting compelling brand identities and immersive cinematic experiences <br /><span className='font-semibold text-accent-foreground'>scroll down to see how we bring stories to life!</span></p>
  </div>
  )
}

export default HeroHeading
