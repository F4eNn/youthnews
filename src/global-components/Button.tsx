import { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
   'active:scale-95 transitin-all  text-lig duration-300 text-cta-size font-medium rounded-button-radius',
   {
      variants: {
         variant: {
            primary: 'bg-primary',
            dropdown: 'flex justify-center items-center gap-2.5',
         },
         size: { 'full-width': 'w-full p-4', default: 'w-max p-4', dropdown: 'p-2.5' },
      },
      defaultVariants: { variant: 'primary', size: 'default' },
   },
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

const Button = forwardRef(
   ({ className, size, variant, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
      return <button ref={ref} {...props} className={cn(buttonVariants({ size, variant, className }))} />;
   },
);

Button.displayName = 'Button';
export { Button, buttonVariants };
