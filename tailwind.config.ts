import { extendTailwindMerge } from 'tailwind-merge';

import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/global-components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      fontSize: {
         'heading-1': ['5.313rem', '6.25rem'],
         'heading-2': ['2.5rem', '3.5rem'],
         'heading-3': ['1.5rem', '2rem'],
         default: ['1.25rem', '1.875rem'],
         'cta-size': ['1.25rem', '1.75rem'],
         'heading-1-mobile': ['2rem', '2.5rem'],
         'heading-2-mobile': ['1.5rem', '2'],
         'heading-3-mobile': ['1.25rem', '1.75rem'],
         mobile: ['1', '1.5'],
      },
      colors: {
         primary: '#FACC13',
         'light-gray': '#C7C8C9',
         gray: '#5A5867',
         'light-dark': '#141414',
         black: '#000000',
         white: '#ffffff',
      },
      borderRadius: {
         'button-radius': '10px',
      },
   },
   plugins: [],
};
export default config;

export const twMerge = extendTailwindMerge({
   override: {
      classGroups: {
         'font-size': Object.keys(config.theme!.fontSize!).map(key => `text-${key}`),
      },
   },
});
