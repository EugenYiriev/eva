import React from 'react';

interface SubtitleProps {
  text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    //В таких компонентах лучше использовать не кастомнй проп text, а children. Так в коде это будет более натурально выглядеть при использовании
    //Например
    // <Subtitle>Some text</Subtitle>
    //Вместо
    // <Subtitle text="Some text" />
    <h2 className="text-white text-5xl font-semibold leading-[72px] tracking-[(-1px)]">{text}</h2>
  );
};
