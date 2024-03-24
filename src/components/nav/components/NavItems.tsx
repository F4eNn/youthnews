'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';
import { twJoin } from 'tailwind-merge';

import { getNavItems } from '@/constants/navigation-paths';

type NavItemProps = {
   setDispatch?: Dispatch<SetStateAction<boolean>>;
   isDesktop?: boolean;
};

export const NavItems = ({ setDispatch, isDesktop = false }: NavItemProps) => {
   const currentPath = usePathname();

   const toggleNav = () => {
      if (setDispatch) {
         setDispatch(prev => !prev);
      }
   };
   const visibleNavItems = 3;
   const navItems = isDesktop ? getNavItems(visibleNavItems) : getNavItems();
   return (
      <>
         {navItems.map(({ label, path }) => (
            <li
               key={path}
               className='flex w-max  font-medium '>
               <Link
                  onClick={toggleNav}
                  href={path}
                  className={twJoin(
                     ' py-2.5 text-center w-max  relative mx-auto',
                     currentPath === path && 'text-white custom-underline',
                     currentPath !== path && 'text-light-gray',
                  )}>
                  {label}
               </Link>
            </li>
         ))}
      </>
   );
};
