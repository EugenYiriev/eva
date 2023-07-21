"use client";
import { useState, useEffect } from 'react';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { AdditionalTitle } from '../Tags/AdditionalTitle/AdditionalTitle';
import { Rug } from './Rug/Rug';
import client from '../../../sanity/lib/client';

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
        //Так вместо any возвращается тип OurRugsState
        //Так лучше сделать во всех компонентах
        const response = await client.fetch<OurRugsState>(`*[_type == "ourRugs"][0]{
          title,
          subtitle,
          "rugList": list[]{
            title,
            subtitle,
            "imageUrl": image.asset->url
          }
        }`);

        //Не нужно отдельно сохранять в стейт каждое поле
        //Так лучше:
        setOurRugs(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  return (
    //Непонятный класс ourRugs
    <div className='float-left w-full relative my-28 ourRugs'>
      <Subtitle text={ourRugs.title} />
      <AdditionalTitle text={ourRugs.subtitle} />
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
