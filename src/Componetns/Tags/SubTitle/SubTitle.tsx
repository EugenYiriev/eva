import React from 'react';
import styles from './style.module.scss';

interface SubtitleProps {
  text: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <h2 className={styles.subtitle}>{text}</h2>
  );
};
