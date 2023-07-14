import React from 'react';
import Image from 'next/image';

interface RugProps {
  title: string;
  text: string;
  imageUrl: string;
}

export const Rug: React.FC<RugProps> = ({ title, text, imageUrl }) => {
  return (
    <div className='mx-auto mt-16 mb-0'>
      <Image
        src={imageUrl}
        width={150}
        height={138}
        alt=""
        className='rounded-3xl bg-[#ffffff05] p-11 customBoxShadow'
      />
      <h4 className='text-white text-xl font-bold leading-6 uppercase mt-5 w-3/4'>{title}</h4>
      <p className='text-white text-base font-normal leading-5 mt-2.5 w-3/4'>{text}</p>
    </div>
  );
};
