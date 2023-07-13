"use client";
import React, { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';
import 'tailwindcss/tailwind.css';

interface HeaderData {
  siteName: string;
  phoneLink: string;
  phoneNumber: string;
}

export const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.fetch('*[_type == "header"] | order(orderings)');
      setHeaderData(response[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { siteName, phoneLink, phoneNumber } = headerData || {};

  return (
    <header className={styles.header}>
      {siteName && (
        <>
          <div className={styles.nameWeb}>{siteName}</div>
          <div className={styles.phone}>
            <a href={`tel:${phoneLink}`}>
              <span>{phoneNumber}</span>
            </a>
          </div>
        </>
      )}
    </header>
  );
};