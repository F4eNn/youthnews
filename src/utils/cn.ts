import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { twMerge } from '../../tailwind.config';

export const cn = (...classes: ClassValue[]) => {
   return twMerge(clsx(classes));
};
