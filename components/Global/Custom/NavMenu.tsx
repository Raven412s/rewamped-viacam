"use client"; // Ensures this component is rendered client-side

// UI Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal,
  DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Utilities & Types
import { cn } from "@/lib/utils";
import { menuItems } from "@/data";
import { MenuItem } from "@/types";

// Icons
import { MenuIcon, X } from "lucide-react";

// Custom Components
import Link from "next/link";
import * as React from "react";
import Logo from "./Logo";
import StyledButton from "./StyledButton";
import { Separator } from "@/components/ui/separator";

// Renders menu items recursively including submenus
const RenderMenu = ({ items }: { items: MenuItem[] }) => {
    return items.map((item, index) =>
      !item.subMenu ? (
        <Link href={item.link!} key={index} passHref legacyBehavior>
          <DropdownMenuItem className="max-w-40 hover:bg-accent/50 transition-colors">
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.title}
          </DropdownMenuItem>
        </Link>
      ) : (
        <DropdownMenuSub key={index}>
          <DropdownMenuSubTrigger className="hover:bg-accent/50">
            <span className="flex items-center gap-2">
              {item.icon && <span>{item.icon}</span>}
              {item.title}
            </span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent
              sideOffset={8}
              className="bg-background border rounded-lg shadow-lg max-w-48 w-full"
              collisionPadding={16}
            >
              {item.subMenu?.length && <RenderMenu items={item.subMenu} />}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      )
    );
  };

  export function NavMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
      <>
        {/* Desktop Nav (visible lg and above) */}
        <div className="hidden lg:block">
          <Navigation />
        </div>

        {/* Mobile Nav (visible below lg) */}
        <div className="block lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[85vw] max-w-sm overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <Navigation mobileView />
                </div>
                {/* Bottom Call-to-Action */}
                <div className="pb-8 pt-4 sticky bottom-0 bg-background">
                  <Separator className="mb-4" />
                  <StyledButton
                    className="w-full py-3 rounded-full before:rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Now
                  </StyledButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </>
    );
  }

  // Custom wrapper for menu links
const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, icon, children, ...props }, ref) => {
return (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none flex items-center gap-2">
          {icon}
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
);
});
ListItem.displayName = "ListItem";

interface NavigationProps {
    mobileView?: boolean;
  }

  const Navigation = ({ mobileView = false }: NavigationProps) => {
    return (
      <NavigationMenu className={mobileView ? "w-full" : ""}>
        <NavigationMenuList
          className={cn(
            "items-start",
            mobileView ? "flex-col space-y-2" : "flex-row space-x-2"
          )}
        >
          {/* Getting Started Mega Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent hover:bg-accent/50",
                mobileView && "w-full justify-between"
              )}
            >
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent className="relative min-w-[35rem] h-[30rem] ">
              <ul
                className={cn(
                  "grid gap-3 p-4 absolute z-10 ",
                  mobileView ? "w-[85vw]" : "w-[35rem] lg:grid-cols-[.75fr_1fr]"
                )}
              >
                {/* Logo + Blurb */}
                <li className={mobileView ? "" : "row-span-4"}>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium flex gap-4 items-end justify-start">
                        <Logo />
                        <h1 className="min-w-max">Viacam Productions</h1>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Innovative solutions for branding, marketing, web development, design, printing, and corporate growth.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                {/* Quick Links */}
                <ListItem href="/portfolio" title="Our Works" className={mobileView ? "w-full" : "p-0 self-end py-2"}>
                  Explore our collection of past projects and creative works.
                </ListItem>
                <ListItem href="/gallery" title="Gallery" className={mobileView ? "w-full" : "p-0 self-end py-2"}>
                  Our gallery of visuals and experiences.
                </ListItem>
                <ListItem href="/about" title="About" className={mobileView ? "w-full" : "p-0 self-end py-2"}>
                  Learn more about our mission, values, and journey.
                </ListItem>
                <ListItem href="/team" title="Meet Our Team" className={mobileView ? "w-full" : "p-0 self-end py-2"}>
                  Get to know the talented individuals behind our success.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Services Dropdown with nested categories */}
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-accent/50",
                    mobileView && "w-full justify-between"
                  )}
                >
                  Services
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={cn(
                  "w-full p-4 rounded-lg border bg-background overflow-y-auto",
                  mobileView ? "w-[85vw] max-h-[70vh]" : "min-w-[40rem] max-h-[80vh]"
                )}
                side={mobileView ? "bottom" : "right"}
                align={mobileView ? "start" : "center"}
                collisionPadding={16}
              >
                <DropdownMenuLabel>Our Services</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup
                  className={cn(
                    "grid gap-4 mt-3",
                    mobileView ? "grid-cols-1" : "grid-cols-2"
                  )}
                >
                  {menuItems.map((category, index) => (
                    <div key={index} className="p-2">
                      <div className="flex gap-3 items-center text-muted-foreground p-2">
                        {category.icon && <span>{category.icon}</span>}
                        <span className="font-medium">{category.title}</span>
                      </div>
                      <div className="w-full p-2">
                        {category.subMenu?.length ? (
                          <RenderMenu items={category.subMenu} />
                        ) : (
                          <Link
                            href={category.link || "#"}
                            className="text-sm hover:underline"
                          >
                            Go to {category.title}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

          {/* Static Docs Link */}
          <NavigationMenuItem>
            <Link href="/docs" passHref legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-accent/50",
                  mobileView && "w-full"
                )}
              >
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  };
