import React from 'react';
import styles from './style.module.scss';

export const TitleBlock = ({ text , listStyle}) => {
  return (
      <h3 className={`${styles.titleBlock} ${listStyle}`}>{text}</h3>
  );
};

