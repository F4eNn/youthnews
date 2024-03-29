/** @format */

export default function Home() {
   return (
      <main>
         <div className='relative -z-20 h-screen'>
            <video
               width='320'
               height='240'
               className='h-screen w-full object-cover'
               muted>
               <source
                  src='./hero.mp4'
                  type='video/mp4'
               />
            </video>
            <div className='absolute left-0 top-0 size-full h-screen bg-black/70' />
         </div>
      </main>
   );
}
