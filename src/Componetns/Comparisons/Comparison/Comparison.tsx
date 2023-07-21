import React from 'react';

interface ComparisonProps {
  title: string;
  image: string;
  items: string[];
  //customsStyle - это не очень хорошее название для пропа. Лучше называть его className, тогда будет понятно, что это класс, который будет добавлен к компоненту
  customStyle: string;
}

export const Comparison: React.FC<ComparisonProps> = ({ title, image, items, customStyle }) => {
  const firstWord = title.split(' ')[0]; 

  return (
    //Для того чтобы объединить два класса в один используй библиотеку classnames
    <div className={`'w-1/2 float-left mt-10 ' ${customStyle}`}> 
      <h4 className='text-white text-lg font-extrabold uppercase leading-normal'>
        <span>{firstWord}</span>
        {title.substring(firstWord.length)} 
      </h4>
      {image && (
        <img src={image} alt="Comparison Image" className='my-5 mx-0 rounded-3xl max-w-[475px] max-h-[276px]' />
      )}
      <ul className='list-none text-white text-lg font-medium max-w-[450px]'>
        {items.map((item, index) => (
          <li key={index} className='mb-7 ml-9'>{item}</li>
        ))}
      </ul>
    </div>
  );
};
