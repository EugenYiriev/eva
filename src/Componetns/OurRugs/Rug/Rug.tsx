import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

interface RugProps {
  title: string;
  text: string;
  imageUrl: string;
}

export const Rug: React.FC<RugProps> = ({ title, text, imageUrl }) => {
  return (
    <div className={styles.rugInfo}>
      <Image
        src={imageUrl}
        width={150}
        height={138}
        alt=""
        className={styles.rugImage}
      />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
