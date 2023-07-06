import React from 'react';
import styles from './listItem.module.scss';

export const ListItem = ({ items, listStyle }) => {
  return (
    <ul className={`${styles.list} ${listStyle}`}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.item}`}>{item}</li>
      ))}
    </ul>
  );
};