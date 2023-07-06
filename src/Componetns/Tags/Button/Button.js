import React from 'react';
import styles from './button.module.scss';

export const Button = ({ link, title, className }) => {
  return (
    <a href={link} className={`${styles.button} ${className}`}>
      {title}
    </a>
  );
};
