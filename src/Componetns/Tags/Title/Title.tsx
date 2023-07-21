import React from 'react';

interface TitleProps {
  text: string;
}

// Все тоже самое, что и в Subtitle.tsx
export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="text-white text-7xl font-semibold leading-[80px] tracking-tighter">{text}</h1>
  );
};
 