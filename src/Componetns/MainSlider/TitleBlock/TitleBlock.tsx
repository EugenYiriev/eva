import React from 'react';

interface TitleBlockProps {
  text: string;
  listStyle: string;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({ text, listStyle }) => {
  return (
    <h3 className={`'text-white text-3xl font-medium ' ${listStyle}`}>{text}</h3>
  );
};
