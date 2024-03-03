'use client';
import { twJoin } from 'tailwind-merge';

import { useScroll } from '@/hooks/useScroll';

import { Mobile } from './Mobile';
import { Desktop } from './Desktop';

export const Nav = () => {
   const { isScrollDown, isScrollUp, lastScrollPosition } = useScroll();
   const navHeight = 80;
   return (
      <nav
         className={twJoin(
            'fixed w-full transition-all duration-300',
            isScrollDown && 'top-[-80px]',
            isScrollUp && 'top-0',
            lastScrollPosition.current > navHeight && 'bg-light-dark',
         )}>
         <Mobile />
         <Desktop />
      </nav>
   );
};
