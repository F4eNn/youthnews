import { useEffect, useState, useRef } from 'react';

export const useScroll = () => {
   const [isScroll, setIsScroll] = useState({ isScrollUp: true, isScrollDown: false });
   const lastScrollPosition = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPosition = window.scrollY;

         if (lastScrollPosition.current > currentScrollPosition) {
            setIsScroll({ isScrollUp: true, isScrollDown: false });
         } else setIsScroll({ isScrollDown: true, isScrollUp: false });
         lastScrollPosition.current = currentScrollPosition;
      };
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return { ...isScroll, lastScrollPosition };
};
