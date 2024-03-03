'use client';
import { useScroll } from '@/hooks/useScroll';

import { Mobile } from './Mobile';

export const Nav = () => {
   const isScroll = useScroll();
   return (
      <nav className={`${isScroll ? 'fixed top-0 w-full bg-primary' : ''}`}>
         <Mobile />
      </nav>
   );
};
