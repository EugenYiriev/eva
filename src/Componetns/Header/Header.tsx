"use client";
import React, { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import 'tailwindcss/tailwind.css';
import styles from './style.module.scss';
import classNames from 'classnames';

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
    <header className='m=0'>
      {siteName && (
        <div className='relative flex justify-between items-center top-11 font-bold text-[32px] leading-[22px] tracking-[1.5px]'>
          <h2 className={classNames('uppercase bg-clip-text text-left', styles.siteTitle)}>{siteName}</h2>
          <a className='text-white text-right text-lg font-medium' href={`tel:${phoneLink}`}> {phoneNumber} </a>
        </div>
      )
      }
    </header >
  );
};