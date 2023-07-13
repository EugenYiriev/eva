import React from 'react';
import styles from './style.module.scss';

interface LinkProps {
  link: string;
  title: string;
  className?: string;
}

export const LinkProps: React.FC<LinkProps> = ({ link, title, className }) => {
  return (
    <a href={link} className={`${styles.button} ${className}`}>
      {title}
    </a>
  );
};

