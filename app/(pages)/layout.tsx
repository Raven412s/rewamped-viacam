import Bounded from '@/components/Global/HOC/Bounded'
import Navbar from '@/components/Global/Navbar'
import React, { PropsWithChildren } from 'react'

type Props = {}

const layout = ({children}: PropsWithChildren) => {
  return (
    <div>
        <Navbar/>
        <Bounded>
            {children}
        </Bounded>
    </div>
  )
}

export default layout
