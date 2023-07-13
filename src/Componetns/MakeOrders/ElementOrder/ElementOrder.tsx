import styles from './style.module.scss';
import Image from 'next/image';

interface ElementOrderProps {
  title: string;
  imageUrl: string;
  addCusClass: string;
}

export const ElementOrder: React.FC<ElementOrderProps> = ({ title, imageUrl, addCusClass }) => {
  //TODO: Remove infoClass. I don't see any reason to use it
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
