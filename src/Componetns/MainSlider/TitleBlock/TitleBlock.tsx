import React from 'react';
import styles from './style.module.scss';

interface TitleBlockProps {
  text: string;
  listStyle: string;
}

export const TitleBlock: React.FC<TitleBlockProps> = ({ text, listStyle }) => {
  return (
    <h3 className={`${styles.titleBlock} ${listStyle}`}>{text}</h3>
  );
};
