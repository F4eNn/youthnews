import { useEffect, useState, useRef } from 'react';

export const useScroll = () => {
   const [isScrollUp, setIsScrollUp] = useState(false);
   const lastScrollPostion = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPosition = window.scrollY;
         const navHeight = 80;

         if (lastScrollPostion.current > currentScrollPosition && currentScrollPosition > navHeight) {
            setIsScrollUp(true);
         } else setIsScrollUp(false);
         lastScrollPostion.current = currentScrollPosition;
      };
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return isScrollUp;
};
