import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/global/Button';
import { dropdownItems } from '@/constants/navigation-paths';

import DropdownIcon from '../../../public/dropdown-arrow.svg';

export type DropdownCvaType = VariantProps<typeof dropdownVariants>;
const dropdownVariants = cva('', {
   variants: {
      dropdownCard: {
         primary: [
            'absolute left-0 top-14 w-full overflow-hidden rounded-button-radius bg-white text-light-dark transition-colors   duration-300',
         ],
      },
      dropdownItemSize: {
         default: 'text-mobile font-normal text-light-dark',
         mobile: 'text-mobile',
      },
   },
});

type DropdownProps = DropdownCvaType & {
   dropdownHeight?: number;
};

export const Dropdown = forwardRef((props: DropdownProps, ref: ForwardedRef<HTMLButtonElement>) => {
   const [isOpenDropdown, setIsOpenDropdown] = useState(false);

   const currentPathname = usePathname();
   const isAnyDropdownPath = dropdownItems.some(({ path }) => path === currentPathname);

   const { dropdownCard, dropdownHeight, dropdownItemSize } = props;
   const isExactPathDesktop = (path: string) => currentPathname === path;

   const handleOutsideClick = () => {
      setIsOpenDropdown(false);
   };

   useEffect(() => {
      if (isOpenDropdown) {
         document.addEventListener('click', handleOutsideClick);
      }
      return () => document.removeEventListener('click', handleOutsideClick);
   }, [isOpenDropdown]);

   return (
      <div className='relative flex flex-col items-center justify-center text-light-gray '>
         <Button
            ref={ref}
            onClick={() => setIsOpenDropdown(prev => !prev)}
            variant={'dropdown'}
            className={isAnyDropdownPath ? 'custom-underline relative text-white' : ''}
            size={'dropdown-size'}>
            Dowiedz się więcej
            <DropdownIcon
               className={twMerge(
                  'fill-light-gray',
                  !isOpenDropdown && 'rotate-180',
                  isAnyDropdownPath && 'fill-white',
               )}
            />
         </Button>
         <div
            style={{ height: `${dropdownHeight}px` }}
            className='w-full gap-3.5 overflow-y-auto '>
            {isOpenDropdown && (
               <ul className={dropdownVariants({ dropdownCard })}>
                  {dropdownItems.map(({ label, path }) => (
                     <li
                        key={path}
                        className='flex w-full font-medium first:pt-2 last:pb-2 '>
                        <Link
                           href={path}
                           className={twMerge(
                              'w-full text-center p-2.5 hover:bg-light-gray/20',
                              dropdownVariants({ dropdownItemSize }),
                              isExactPathDesktop(path) && 'text-light-gray/60 hover:bg-light-gray/0 ',
                           )}>
                           {label}
                        </Link>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
});

Dropdown.displayName = 'Dropdown';
