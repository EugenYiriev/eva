import React from 'react';
import styles from './infoblock.module.scss';

export const InfoBlock = ({ title, text, className  }) => {
  return (
    <>
      <span className={styles.infoTitle}>{title}</span>
      <span className={`${styles.infoWeth} ${className}`} >{text}</span>
    </>
  );
};

