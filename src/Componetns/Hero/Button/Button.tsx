import React from 'react';
import styles from './style.module.scss';

interface ButtonProps {
  link: string;
  title: string;
  className?: string;
}

//TODO: Change it. It's not a button. It's a link
export const Button: React.FC<ButtonProps> = ({ link, title, className }) => {
  return (
    <a href={link} className={`${styles.button} ${className}`}>
      {title}
    </a>
  );
};
