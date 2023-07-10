import React from 'react';
import styles from './style.module.scss';

export const AdditionalTitle = ({ text }) => {
  return (
      <h3 className={styles.additionalTitle}>{text}</h3>
  );
};

