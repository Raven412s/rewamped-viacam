import { ReactNode } from "react";

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
