"use client";
import { useState, useEffect } from 'react';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { AdditionalTitle } from '../Tags/AdditionalTitle/AdditionalTitle';
import { Rug } from './Rug/Rug';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';
import classNames from 'classnames';

interface OurRugsProps { }

interface RugData {
  title: string;
  subtitle: string;
  imageUrl: string;
}

type OurRugsState = {
  title: string;
  subtitle: string;
  rugList: RugData[];
};

export const OurRugs: React.FC<OurRugsProps> = () => {
  const [ourRugs, setOurRugs] = useState<OurRugsState>({ title: '', subtitle: '', rugList: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch<OurRugsState>(`*[_type == "ourRugs"][0]{
          title,
          subtitle,
          "rugList": list[]{
            title,
            subtitle,
            "imageUrl": image.asset->url
          }
        }`);

        setOurRugs(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classNames('float-left w-full relative my-28', styles.ourRugsBackgroundColor)}>
      <Subtitle>{ourRugs.title}</Subtitle>
      <AdditionalTitle>{ourRugs.subtitle}</AdditionalTitle>
      <div className='flex flex-wrap'>
        {ourRugs.rugList.map((rug, i) => (
          <div key={i} className='w-1/4 box-border p-2.5'>
            <Rug key={i} title={rug.title} text={rug.subtitle} imageUrl={rug.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};
