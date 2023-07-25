"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Title } from '../Tags/Title/Title';
import { ListItem } from './ListItem/ListItem';
import { LinkProps } from './LinkProps/LinkProps';
import { InfoBlock } from './InfoBlock/InfoBlock';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';
import classNames from 'classnames';


interface HeroData {
  title: string;
  subtitle: string;
  listItems?: string[];
  buttons: {
    buttonLink: string;
    buttonTitle: string;
  }[];
  image: string;
  blockInfo: {
    infoBlockTitle: string;
    infoBlockSubtitle: string;
  }[];
}

export const Hero: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.fetch<HeroData[]>('*[_type == "hero"] | order(orderings)');
      setHeroData(response[0]);
      getImageUrl(response[0].image);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getImageUrl = async (image: string) => {
    const builder = imageUrlBuilder(client);
    const url = await builder.image(image).url();
    setImageUrl(url);
  };

  const { title, subtitle, listItems = [], buttons = [], blockInfo } = heroData || {};

  const iconUrls = ['/images/Group1.png', '/images/Group2.png'];

  return (
    <>
      <div className='mt-40 w-2/4 float-left'>
        {title && (
          <>
            <Title>{title}</Title>
            <h3 className='mt-10'>{subtitle}</h3> 

            <ListItem items={listItems} listStyle='mt-12' iconUrls={iconUrls} />

            <div className='flex justify-between mt-11 w-[610px]'>
              {buttons.map((button, index) => (
                <LinkProps
                  key={index}
                  link={button.buttonLink}
                  title={button.buttonTitle}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={classNames('rounded-[36px] float-right mt-36 ', styles.heroRight)}>
        <div className={styles.circlePurper}></div>
        <div className={styles.circleBlue}></div>

        {imageUrl && <Image src={imageUrl} width={447} height={448} alt="LeftBlockTime" />}

        <div className='mt-8 mx-0 mb-28'>
          {imageUrl && (
            <Image
              src={imageUrl}
              width={53}
              height={53}
              alt="LeftBlockTime"
              className='rounded-full float-left'
            />
          )}

          <div className='flex float-left flex-col'>
            {blockInfo && blockInfo[0] && (
              <InfoBlock
                title={blockInfo[0].infoBlockTitle}
                text={blockInfo[0].infoBlockSubtitle}
              />
            )}
          </div>

          <div className='flex float-right flex-col'>
            {blockInfo && blockInfo[1] && (
              <InfoBlock
                title={blockInfo[1].infoBlockTitle}
                text={blockInfo[1].infoBlockSubtitle}
                className={classNames('text-right ', styles.infoWethCustom)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
