import React from 'react';

interface InfoBlockProps {
  title: string;
  text: string;
  className?: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ title, text, className }) => {
  return (
    <>
      <span className='text-white text-base font-semibold leading-6 ml-4'>{title}</span>
      <span className={`text-white text-base font-normal leading-6 ml-4 ${className}`}>{text}</span>
    </>
  );
};