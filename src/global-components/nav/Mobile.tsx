'use client';
import { Sling as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import { navItems } from '@/constants/navigation-paths';

import { Dropdown } from './Dropdown';
import Logo from '../../../public/logo.png';
import { Button } from '../Button';

export const Mobile = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [dropdownHeight, setDropdownHeight] = useState(0);

   const btnRef = useRef<HTMLButtonElement>(null);
   const dropdownRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      const getSpaceBetween = () => {
         const ctaTop = btnRef.current?.getBoundingClientRect().top;
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
      <div className='p-3 '>
         <div className='relative z-50'>
            <Image
               src={Logo}
               width={56}
               height={56}
               placeholder='blur'
               alt='Logo organizacji Youthnews'
               className='mx-auto'
            />
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
               <ul className=' flex flex-1 flex-col items-center gap-2.5 pt-32 text-white'>
                  {navItems.map(({ label, path }) => (
                     <li key={path} className='flex w-full text-cta-size font-medium'>
                        <Link href='/' className='w-full p-2.5 text-center'>
                           {label}
                        </Link>
                     </li>
                  ))}
                  <li>
                     <Dropdown dropdownHeight={dropdownHeight} ref={dropdownRef} />
                  </li>
               </ul>
               <Button ref={btnRef} size={'full-width'} className='mb-8 mt-auto bg-primary p-4'>
                  Napisz do nas
               </Button>
            </div>
         )}
      </div>
   );
};
