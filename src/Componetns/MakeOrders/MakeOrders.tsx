"use client";
import { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';
import imageUrlBuilder from '@sanity/image-url';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { AdditionalTitle } from '../Tags/AdditionalTitle/AdditionalTitle';
import { ElementOrder } from './ElementOrder/ElementOrder';

interface MakeOrdersData {
  title: string;
  subtitle: string;
  list: {
    title: string;
    image: string;
  }[];
}

export function MakeOrders() {
  const [data, setData] = useState<MakeOrdersData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch<MakeOrdersData[]>(`*[_type == 'makeOrder']`);
        if (response && response.length > 0) {
          setData(response[0]);
        }
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  const builder = imageUrlBuilder(client);
  const urlFor = (source: string) => builder.image(source);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.makeOrder}>
      <div className={styles.makeOrderTitle}>
        <Subtitle text={data.title} />
        <AdditionalTitle text={data.subtitle} />
      </div>

      <div className={styles.blockElements}>
        <div className={styles.elementRow}>
          {data.list.slice(0, 3).map((item, index) => (
            <div className={styles.element} key={index}>
              <ElementOrder
                title={item.title}
                imageUrl={urlFor(item.image).url()}
              />
            </div>
          ))}
        </div>

        <div className={styles.elementRow}>
          {data.list.slice(3, 6).map((item, index) => (
            <div className={styles.element} key={index}>
              <ElementOrder
                title={item.title}
                imageUrl={urlFor(item.image).url()}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
