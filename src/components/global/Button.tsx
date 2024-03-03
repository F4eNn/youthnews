import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
   'rounded-button-radius text-center text-cta-size font-medium transition-all duration-300 active:scale-95',
   {
      variants: {
         variant: {
            primary: 'bg-primary text-black',
            dropdown: 'flex items-center  justify-center gap-2.5',
         },
         size: { 'full-width': 'w-full p-4', default: 'p-4 ', dropdown: 'p-2.5' },
      },
      defaultVariants: { variant: 'primary', size: 'default' },
   },
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

const Button = forwardRef(
   ({ className, size, variant, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
      return (
         <button
            ref={ref}
            {...props}
            className={cn(buttonVariants({ size, variant, className }))}
         />
      );
   },
);

Button.displayName = 'Button';
export { Button, buttonVariants };
