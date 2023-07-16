"use client";
import React, { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
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
    <header className='m=0'>
      {siteName && (
        <>
          <div className='relative top-11 font-bold text-[32px] leading-[22px] tracking-[1.5px] uppercase bg-clip-text nameWeb'>{siteName}</div>
          <div className='text-white text-right top-2.5 text-lg font-medium font-sans Roboto'>
            <a href={`tel:${phoneLink}`}>
              <span>{phoneNumber}</span>
            </a>
          </div>
        </>
      )}
    </header>
  );
};