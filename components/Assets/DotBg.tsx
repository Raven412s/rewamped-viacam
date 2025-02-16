import React from 'react'

export const DotBg = () => {
  return (
<div className="h-full w-full top-0 left-0  -z-30  dark:bg-dot-white/[0.35] bg-dot-black/[0.35] absolute flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
</div>
  )
}
