import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-white text-7xl font-semibold leading-[80px] tracking-tighter">{children}</h1>
  );
};
 