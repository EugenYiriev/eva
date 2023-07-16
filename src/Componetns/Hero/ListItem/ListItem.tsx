import React from 'react';
import Image from 'next/image';

interface ListItemProps {
  items: string[];
  listStyle: string;
  iconUrls: string[];
}

export const ListItem: React.FC<ListItemProps> = ({ items, listStyle, iconUrls }) => {
  return (
    <ul className={`'m-0' ${listStyle}`}>
      {items.map((item, index) => (
        <li key={index} className='text-white text-lg list-none mt-8'> 
          {iconUrls[index] && (
            <Image
              src={iconUrls[index]}
              width={35}
              height={35}
              alt="LeftBlockTime"
              className='float-left mx-2'
            />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
};
