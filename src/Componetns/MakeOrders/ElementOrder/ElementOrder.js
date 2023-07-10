import styles from './style.module.scss';
import Image from 'next/image';

export const ElementOrder = ({ title, imageUrl, addCusClass }) => {

    const infoClass = `in-${addCusClass}`;
    
    return (
        <div className={`${styles.elementInfo} ${styles[infoClass]}`}>
        <Image
          src={imageUrl}
          width={60}
          height={60}
          alt=""
          className={styles.elementImage}
        />
        <p className={styles.title}>{title}</p>
      </div>
    );
  };
  