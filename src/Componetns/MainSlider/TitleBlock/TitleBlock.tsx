import React from 'react';

interface TitleBlockProps {
  text: string;
  listStyle: string;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({ text, listStyle }) => {
  return (
    //Для того чтобы объединить два класса в один используй библиотеку classnames
    //А вообще слишком мало кода, чтобы его выносить в отдельный компонент
    <h3 className={`'text-white text-3xl font-medium ' ${listStyle}`}>{text}</h3>
  );
};
