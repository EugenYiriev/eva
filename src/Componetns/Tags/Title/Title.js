import React from 'react';
import styles from './title.module.scss';

export const Title = ({ text }) => {
  return (
      <h1 className={styles.title}>{text}</h1>
  );
};

