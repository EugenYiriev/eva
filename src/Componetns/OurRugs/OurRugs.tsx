"use client"; 
import { useState, useEffect } from 'react';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { AdditionalTitle } from '../Tags/AdditionalTitle/AdditionalTitle';
import { Rug } from './Rug/Rug';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';

interface OurRugsProps {}

interface RugData {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const OurRugs: React.FC<OurRugsProps> = () => {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [rugList, setRugList] = useState<RugData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(`*[_type == "ourRugs"][0]{
          title,
          subtitle,
          "rugList": list[]{
            title,
            subtitle,
            "imageUrl": image.asset->url
          }
        }`);

        setTitle(response.title);
        setSubtitle(response.subtitle);
        setRugList(response.rugList);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.ourRugs}>
      <div className={styles.rectangle}></div>
      <Subtitle text={title} />
      <AdditionalTitle text={subtitle} />
      <div className={styles.rugContainer}>
        {rugList.map((rug, i) => (
          <div key={i} className={styles.rugBlock}>
            <Rug
              key={i}
              title={rug.title}
              text={rug.subtitle}
              imageUrl={rug.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
