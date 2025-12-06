"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { ThemeSelector } from "@/providers/Theme/ThemeSelector";
import { Button } from "@/components/ui/button";
import { CMSLink } from "@/components/Link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import type { Header as HeaderType } from '@/payload-types'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || [];
  const [activeItem, setActiveItem] = useState(navItems[0]?.link.label || "");

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`,
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-4">
      <div className="md:hidden fixed left-1/2 top-4 z-50 -translate-x-1/2">
        <ThemeSelector />
      </div>
      <div className="hidden md:block fixed left-4 top-4 z-50">
        <ThemeSelector />
      </div>
      <nav className="container flex items-center justify-between">
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3"
          >
            {navItems.map((item) => (
              <React.Fragment key={item.link.label}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    data-nav-item={item.link.label}
                    onClick={() => setActiveItem(item.link.label)}
                    className={`relative cursor-pointer text-sm font-medium hover:bg-transparent ${activeItem === item.link.label
                      ? "text-foreground"
                      : "text-muted-foreground"
                      }`}
                  >
                    <CMSLink {...item.link} appearance="link" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-foreground h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav navItems={navItems} activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/order">
            <Button
              variant="outline"
              size="sm"
              className="h-10 py-2.5 text-sm font-normal bg-primary text-primary-foreground border-primary hover:bg-primary/90"
            >
              Rezervovať
            </Button>
          </Link>
        </div>
      </nav>
    </section>
  );
};

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative size-full">
      <div className="absolute flex size-full items-center justify-center">
        <Menu
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  navItems,
  activeItem,
  setActiveItem,
}: {
  navItems: HeaderType['navItems'];
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block flex h-full items-center lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <AnimatedHamburger isOpen={isOpen} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -right-4 top-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl p-0 sm:right-auto sm:top-auto sm:w-80 lg:hidden"
        >
          <ul className="bg-background text-foreground w-full py-4">
            {navItems?.map((navItem, idx) => (
              <li key={idx}>
                <div
                  onClick={() => setActiveItem(navItem.link.label)}
                  className={`text-foreground flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${activeItem === navItem.link.label
                    ? "border-foreground text-foreground"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                    }`}
                >
                  <CMSLink {...navItem.link} appearance="link" />
                </div>
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <Link href="/order" className="w-full">
                <Button variant="outline" className="w-full bg-primary text-primary-foreground border-primary hover:bg-primary/90">
                  Rezervovať
                </Button>
              </Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};