import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

interface ListItemProps {
  items: string[];
  listStyle: string;
  iconUrls: string[];
}

export const ListItem: React.FC<ListItemProps> = ({ items, listStyle, iconUrls }) => {
  return (
    <ul className={`${styles.list} ${listStyle}`}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.item}`}>
          {iconUrls[index] && (
            <Image
              src={iconUrls[index]}
              width={35}
              height={35}
              alt="LeftBlockTime"
              className={styles.iconImage}
            />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
};
