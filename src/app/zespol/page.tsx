import React from 'react';

const page = () => {
   return (
      <div>
         <div className='relative -z-20 h-screen'>
            <video
               width='320'
               height='240'
               className='h-screen w-full object-cover'
               autoPlay
               loop={true}
               muted>
               <source
                  src='./hero.mp4'
                  type='video/mp4'
               />
            </video>
            <div className='absolute left-0 top-0 size-full h-screen bg-black/70' />
         </div>
      </div>
   );
};

export default page;
