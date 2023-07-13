import React from 'react';
import styles from './style.module.scss';

interface InfoBlockProps {
  title: string;
  text: string;
  className?: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ title, text, className }) => {
  return (
    <>
      <span className={styles.infoTitle}>{title}</span>
      <span className={`${styles.infoWeth} ${className}`}>{text}</span>
    </>
  );
};
