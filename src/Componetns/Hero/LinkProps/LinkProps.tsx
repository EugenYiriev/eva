import React from 'react';

interface LinkProps {
  link: string;
  title: string;
  className?: string;
}
//Classname не используется
export const LinkProps: React.FC<LinkProps> = ({ link, title, className }) => {
  return (
    <a href={link} className='heroButton flex mr-5 w-[336px] text-white text-2xl font-semibold py-3 px-6 justify-center rounded-[30px] tracking-[-1px]'>
      {title}
    </a>
  );
};

