"use client";
import React, { useState, useEffect } from 'react';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { AdditionalTitle } from '../Tags/AdditionalTitle/AdditionalTitle';
import client from '../../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import styles from './style.module.scss';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { Comparison } from './Comparison/Comparison';

interface ComparisonItem {
  title: string;
  image: string;
  list: string[];
}

interface ComparisonsData {
  title: string;
  subtitle: string;
  image: string;
  videoLink: string;
  listMinus: ComparisonItem[];
  listPlus: ComparisonItem[];
}

export const Comparisons: React.FC = () => {
  const [data, setData] = useState<ComparisonsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(`*[_type == "comparisons"][0]{
          title,
          subtitle,
          image,
          videoLink,
          listMinus,
          listPlus
        }`);

        setData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  const builder = imageUrlBuilder(client);

  if (!data) {
    return null;
  }

  const { title, subtitle, image, videoLink, listMinus, listPlus } = data;

  const imageUrl = image ? builder.image(image).url() : '';

  return (
    <>
      <div className={styles.comparisons}>
        <Subtitle text={title} />
        <AdditionalTitle text={subtitle} />

        <div className={styles.backgroundImg}>
          <Image
            src={'/images/group-130.svg'}
            width={500}
            height={370}
            alt=""
          />
        </div>

        <VideoPlayer videoId={videoLink} posterImageUrl={imageUrl} width={811} height={451} /> 
      </div>

      {listMinus.map((item, index) => (
        <Comparison
          key={index}
          title={item.title}
          image={item.image ? builder.image(item.image).url() : ''}
          items={item.list}
          customStyle={styles.customStyleliMinus}
        />
      ))}

      {listPlus.map((item, index) => (
        <Comparison
          key={index}
          title={item.title}
          image={item.image ? builder.image(item.image).url() : ''}
          items={item.list}
          customStyle={styles.customStyleLiPlus}
        />
      ))}
    </>
  );
};
