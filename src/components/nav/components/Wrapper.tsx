import React, { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
   return <div className='mx-auto w-full max-w-[1440px] px-2.5'>{children}</div>;
};
