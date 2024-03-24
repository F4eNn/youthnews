import Link from 'next/link';

import { navigation } from '@/constants/navigation-paths';

import { NavItems } from './components/NavItems';
import { Dropdown } from './Dropdown';
import { buttonVariants } from '../global/Button';
import { Logo } from '../global/Logo';

export const Desktop = () => {
   return (
      <div className=' hidden items-center  justify-between md:flex lg:text-cta-size'>
         <Logo />
         <div className='flex items-center gap-12 xl:gap-11'>
            <ul className='flex w-full gap-12  xl:gap-20 '>
               <NavItems isDesktop />
               <Dropdown
                  dropdownCard={'primary'}
                  dropdownItemSize={'default'}
               />
            </ul>
            <Link
               href={navigation.contact.path}
               className={buttonVariants({ className: 'hidden xl:block ' })}>
               <span className='block  w-max'>Napisz do nas</span>
            </Link>
         </div>
      </div>
   );
};
