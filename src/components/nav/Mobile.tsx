'use client';
import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import { navigation } from '@/constants/navigation-paths';

import { NavItems } from './components/NavItems';
import { Dropdown } from './Dropdown';
import { buttonVariants } from '../global/Button';
import { Logo } from '../global/Logo';

export const Mobile = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [dropdownHeight, setDropdownHeight] = useState(0);

   const linkRef = useRef<HTMLAnchorElement>(null);
   const dropdownRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      const getSpaceBetween = () => {
         const ctaTop = linkRef.current?.getBoundingClientRect().top;
         const dropdownBtn = dropdownRef.current?.getBoundingClientRect().bottom;
         const additionalGap = 10;
         if (ctaTop && dropdownBtn) {
            setDropdownHeight(ctaTop - dropdownBtn - additionalGap);
         }
      };
      window.addEventListener('resize', getSpaceBetween);
      getSpaceBetween();

      return () => {
         window.removeEventListener('resize', getSpaceBetween);
      };
   }, [isOpen]);

   const handleToggleNav = () => {
      setIsOpen(prev => !prev);
      const body = document.querySelector('body')!;
      if (!isOpen) {
         body.style.overflow = 'hidden';
      } else body.removeAttribute('style');
   };

   return (
      <div className='p-3 md:hidden'>
         <div className='relative z-50'>
            <Logo setDispatch={setIsOpen} />
            <div className='absolute right-3 top-1/2 -translate-y-1/2 '>
               <Hamburger
                  toggled={isOpen}
                  toggle={handleToggleNav}
                  label='Otwórz menu'
                  rounded
                  easing='ease-in'
                  distance='sm'
                  color='#ffffff'
               />
            </div>
         </div>
         {isOpen && (
            <div className='fixed inset-0 flex w-full flex-col justify-between  bg-light-dark px-4'>
               <ul className=' flex flex-1 flex-col items-center gap-2.5 pt-32 '>
                  <NavItems setDispatch={setIsOpen} />
                  <li>
                     <Dropdown
                        dropdownHeight={dropdownHeight}
                        ref={dropdownRef}
                     />
                  </li>
               </ul>
               <Link
                  href={navigation.contact.path}
                  ref={linkRef}
                  className={buttonVariants({
                     variant: 'primary',
                     size: 'full-width',
                     className: 'mb-8 mt-auto',
                  })}>
                  Napisz do nas
               </Link>
            </div>
         )}
      </div>
   );
};
