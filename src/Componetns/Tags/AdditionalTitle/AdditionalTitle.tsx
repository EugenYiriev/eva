import React from 'react';

interface AdditionalTitleProps {
  text: string;
}
//Смотри комментарии в Subtitle.tsx
export const AdditionalTitle: React.FC<AdditionalTitleProps> = ({ text }) => {
  return (
    <h3 className="text-gray-200 text-xl font-normal leading-8 tracking-wider">{text}</h3>
  );
};
