"use client";
import React, { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';

interface HeaderData {
  siteName: string;
  phoneLink: string;
  phoneNumber: string;
}

export const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.fetch('*[_type == "header"] | order(orderings)');
        setHeaderData(response[0]);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <header className={styles.header}>
      {headerData && (
        <>
          <div className={styles.nameWeb}>{headerData.siteName}</div>
          <div className={styles.phone}>
            <a href={`tel:${headerData.phoneLink}`}>
              <span>{headerData.phoneNumber}</span>
            </a>
          </div>
        </>
      )}
    </header>
  );
};
