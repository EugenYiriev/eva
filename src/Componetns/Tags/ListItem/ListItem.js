import React from 'react';
import styles from './listItem.module.scss';
import Image from 'next/image';

export const ListItem = ({ items, listStyle, imageUrls }) => {
  return (
    <ul className={`${styles.list} ${listStyle}`}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.item}`}>
          {imageUrls[index] && (
            <Image
              src={imageUrls[index]}
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
