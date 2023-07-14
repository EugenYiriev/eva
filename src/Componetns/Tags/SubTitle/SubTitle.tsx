import React from 'react';

interface SubtitleProps {
  text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <h2 className="text-white text-5xl font-semibold leading-[72px] tracking-[(-1px)]">{text}</h2>
  );
};
