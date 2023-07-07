import React from 'react';
import styles from './style.module.scss';

export const Button = ({ link, title, className }) => {
  return (
    <a href={link} className={`${styles.button} ${className}`}>
      {title}
    </a>
  );
};
