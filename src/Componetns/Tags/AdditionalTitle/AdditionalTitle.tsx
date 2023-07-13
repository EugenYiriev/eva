import React from 'react';
import styles from './style.module.scss';

interface AdditionalTitleProps {
  text: string;
}

export const AdditionalTitle: React.FC<AdditionalTitleProps> = ({ text }) => {
  return (
    <h3 className={styles.additionalTitle}>{text}</h3>
  );
};
