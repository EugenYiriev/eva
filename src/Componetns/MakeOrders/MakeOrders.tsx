"use client";
import { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
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
    <div className='w-full float-left mt-40'>
      {/* //Лишний див. Более правильно добавлять классы непосредственно в компоненты Subtitle и AdditionalTitle */}
      {/* // Для этого они должны иметь возможность принимать className */}
      <div className='text-center'>
        <Subtitle text={data.title} />
        <AdditionalTitle text={data.subtitle} />
      </div>

    {/* //Лишние дивы и лишнее разделение на два блока */}
    {/* //Все элементы можно отрендерить в одном блоке */}
      <div className='mt-10'>
        <div className='flex justify-between mb-5 '>
          {data.list.slice(0, 3).map((item, index) => (
            //Непонятный класс elementPoint
            <div className='flex text-center elementPoint' key={index}>
              <ElementOrder
                title={item.title}
                imageUrl={urlFor(item.image).url()}
              />
            </div>
          ))}
        </div>

        <div className='flex justify-between mb-5 mt-36'>
          {data.list.slice(3, 6).map((item, index) => (
            //Непонятный класс elementPoint
            <div className='flex text-center elementPoint' key={index}>
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
