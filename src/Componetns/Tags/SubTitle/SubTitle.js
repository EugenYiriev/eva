import React from 'react';
import styles from './style.module.scss';

export const Subtitle = ({ text }) => {
  return (
      <h2 className={styles.subtitle}>{text}</h2>
  );
};

