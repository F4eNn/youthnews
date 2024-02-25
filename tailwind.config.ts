import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      fontSize: {
         'heading-1': ['5.313rem', '6.25rem'],
         'heading-2': ['2.5rem', '3.5rem'],
         'heading-3': ['1.5rem', '2rem'],
         default: ['1.25rem', '1.875rem'],
         'btn-size': ['1.25rem', '1.75rem'],
         'heading-1-mobile': ['2rem', '2.5rem'],
         'heading-2-mobile': ['1.5rem', '2'],
         'heading-3-mobile': ['1.25rem', '1.75rem'],
         'default-mobile': ['1', '1.5'],
      },
      colors: {
         primary: '#FACC13',
         'light-gray': '#C7C8C9',
         gray: '#5A5867',
         black: '#000000',
      },
   },
   plugins: [],
};
export default config;
