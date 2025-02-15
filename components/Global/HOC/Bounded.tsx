import { cn } from '@/lib/utils'
import { BoundedProps } from '@/types'
import React, { PropsWithChildren } from 'react'



const Bounded = ({as: Comp = 'section',className,children,...restProps}:BoundedProps ) => {
  return (
    <Comp className={cn("px-4 py-20 md:py-14 md:px-6 lg:py-16",className)} {...restProps}>
        <div className="mx-auto w-full max-w-6xl">
            {children}
        </div>
    </Comp>
  )
}

export default Bounded
