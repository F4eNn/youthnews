import Link from 'next/link';
import { ForwardedRef, forwardRef, useState } from 'react';

import { dropdownItems } from '@/constants/navigation-paths';

import DropdownIcon from '../../../public/dropdown-arrow.svg';
import { Button } from '@/global-components/Button';

export const Dropdown = forwardRef(
   ({ dropdownHeight }: { dropdownHeight: number }, ref: ForwardedRef<HTMLButtonElement>) => {
      const [isOpenDropdown, setIsOpenDropdown] = useState(false);

      return (
         <div className=' flex flex-col items-center justify-center '>
            <Button
               ref={ref}
               onClick={() => setIsOpenDropdown(prev => !prev)}
               variant={'dropdown'}
               size={'dropdown'}>
               Dowiedz się więcej
               <DropdownIcon className={`${isOpenDropdown ? '' : 'rotate-180'}`} />
            </Button>
            <div
               style={{ height: `${dropdownHeight}px` }}
               className='w-full gap-3.5 overflow-y-auto '>
               {isOpenDropdown && (
                  <ul className='flex flex-col items-center'>
                     {dropdownItems.map(({ label, path }) => (
                        <li
                           key={path}
                           className=' flex w-full font-medium'>
                           <Link
                              href='/'
                              className='w-full p-2.5 text-center text-default-mobile'>
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>
      );
   },
);

Dropdown.displayName = 'Dropdown';
