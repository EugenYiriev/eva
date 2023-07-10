import styles from './style.module.scss';
import Image from 'next/image';

export const ElementOrder = ({ title, imageUrl }) => {
    return (
        <div className={styles.elementInfo}>
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

