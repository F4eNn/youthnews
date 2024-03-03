import { useEffect, useState, useRef } from 'react';

export const useScroll = () => {
   const [isScrollUp, setIsScrollUp] = useState(false);
   const lastScrollPostion = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPosition = window.scrollY;

         if (lastScrollPostion.current > currentScrollPosition) {
            setIsScrollUp(true);
         } else setIsScrollUp(false);
         lastScrollPostion.current = currentScrollPosition;
      };
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return isScrollUp;
};
