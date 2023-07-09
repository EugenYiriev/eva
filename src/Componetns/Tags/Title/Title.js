import React from 'react';
import styles from './style.module.scss';

export const Title = ({ text }) => {
  return (
      <h1 className={styles.title}>{text}</h1>
  );
};

