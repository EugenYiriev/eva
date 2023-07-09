import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

export const Rug = ({ title, text, imageUrl }) => {
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
