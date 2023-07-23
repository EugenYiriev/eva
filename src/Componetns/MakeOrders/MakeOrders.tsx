"use client";
import { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { AdditionalTitle } from '../Tags/AdditionalTitle/AdditionalTitle';
import { ElementOrder } from './ElementOrder/ElementOrder';
import styles from './style.module.css';
import classNames from 'classnames';

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
    <div className='w-full float-left mt-40'>
      <Subtitle className='text-center'>{data.title}</Subtitle>
      <AdditionalTitle className='text-center'>{data.subtitle}</AdditionalTitle>
      <div className='mt-10'>
        <div className='flex justify-between mb-5 flex-wrap'>
          {data.list.slice(0, 6).map((item, index) => (
            <div className={classNames('flex text-center mt-10' , styles.dottedLineBefore)} key={index}>
              <ElementOrder
                title={item.title}
                imageUrl={urlFor(item.image).url()}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
