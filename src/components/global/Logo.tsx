import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

import { navigation } from '@/constants/navigation-paths';

import LogoImg from '../../../public/logo.png';

type LogoProps = {
   setDispatch?: Dispatch<SetStateAction<boolean>>;
};

export const Logo = ({ setDispatch }: LogoProps) => {
   const handleAction = () => {
      if (setDispatch) {
         setDispatch(prev => !prev);
      }
   };
   return (
      <Link
         onClick={handleAction}
         href={navigation.home.path}
         aria-label={navigation.home.label}
         className='cursor-pointer'>
         <Image
            src={LogoImg}
            width={56}
            height={56}
            placeholder='blur'
            alt='Logo organizacji Youthnews'
            className='mx-auto'
         />
      </Link>
   );
};
