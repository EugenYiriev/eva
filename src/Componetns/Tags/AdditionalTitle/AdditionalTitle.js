import React from 'react';
import styles from './style.module.scss';

export const AdditionalTitle = ({ text }) => {
  return (
      <h2 className={styles.additionalTitle}>{text}</h2>
  );
};

