import React from 'react';
import styles from './style.module.scss';

interface ComparisonProps {
  title: string;
  image: string;
  items: string[];
  customStyle: string;
}

export const Comparison: React.FC<ComparisonProps> = ({ title, image, items, customStyle }) => {
  const firstWord = title.split(' ')[0]; 

  return (
    <div className={`${styles.comparison} ${customStyle}`}> 
      <h4 className={styles.title}>
        <span className={styles.firstWord}>{firstWord}</span>
        {title.substring(firstWord.length)} 
      </h4>
      {image && (
        <img src={image} alt="Comparison Image" className={styles.image} />
      )}
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
