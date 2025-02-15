"use client"
import React from 'react'
import { cn } from '@/lib/utils' // Import your cn utility
interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const StyledButton = ({ children, className, ...props }: StyledButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-background hover:bg-muted transition-all duration-200  relative before:absolute before:size-full before:blur-[4px] before:p-5 before:-z-10 before:top-0 before:left-0 before:bg-gradient-to-r before:from-skintone before:via-background before:to-aqua hover:before:from-aqua hover:before:via-background hover:before:to-skintone ',
        className // Merge any additional classes passed in
      )}
    >
      {children}
    </button>
  )
}

export default StyledButton
