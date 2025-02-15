import { ComponentPropsWithoutRef, ReactNode } from "react";

export type LinkItem = {
    title: string;
    link: string
  }

export type MenuItem = {
    title: string;
    icon?: ReactNode; // Allows any React component (e.g., icons)
    link?: string;
    subMenu?: MenuItem[] | LinkItem[];
  };

  export interface GlowAreaProps extends ComponentPropsWithoutRef<"div"> {
    size?: number;
  }

  export interface GlowProps extends ComponentPropsWithoutRef<"div"> {
    color?: string;
  }

  export interface BoundedProps extends ComponentPropsWithoutRef<"div"> {
    as?: React.ElementType  ,
}

