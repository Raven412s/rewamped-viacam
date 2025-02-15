import React from 'react'

import { NavMenu } from './Custom/NavMenu'
import Logo from './Custom/Logo'
import { Separator } from '../ui/separator'
import { ModeToggle } from './Custom/ModeToggle'
import StyledButton from './Custom/StyledButton'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed w-screen top-0 h-fit px-10 pt-3 z-50
               bg-background/30 backdrop-blur-md border border-white/20
               shadow-lg shadow-black/10 rounded-lg ">
        <div className="flex items-center  justify-between relative ">
        <div className=''><NavMenu /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        flex items-center gap-2 md:gap-5">
        <Logo width={40} height={40} className='md:scale-125'/>
        <div className='flex w-fit items-center  flex-col'>
            <h1 className="font-display min-w-max text-lg md:text-3xl font-extrabold">Viacam Productions</h1>
            <p className='font-display text-[12px] md:text-xs text-muted-foreground'>Igniting Vision With Innovation</p>
        </div>
        </div>
        <div className="flex items-center sm:border sm:rounded-full gap-1">
                <StyledButton className="px-4 py-2 rounded-l-full before:rounded-l-full hidden sm:block">
                    <span>Contact</span>
                </StyledButton>
            <span className="min-w-12 sm:border-l">
                <ModeToggle className="bg-background hover:bg-muted rounded-full sm:rounded-r-full  sm:rounded-l-none" />
            </span>
        </div>
        </div>
        <Separator className='mt-5'/>
    </nav>
  )
}

export default Navbar
