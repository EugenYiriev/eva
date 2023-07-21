"use client";
import { useState, useEffect } from 'react';
import client from '../../../sanity/lib/client';
import { TitleBlock } from './TitleBlock/TitleBlock';
import imageUrlBuilder from '@sanity/image-url';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSettings } from './sliderSettings';

interface MainSliderData {
  leftTitle: string;
  rightTitle: string;
  imageGallery: string[];
}

interface MainSliderProps { }

export const MainSlider: React.FC<MainSliderProps> = () => {
  const [dataMainSlider, setMainSliderData] = useState<MainSliderData | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: MainSliderData[] = await client.fetch('*[_type == "mainSlider"]');
        setMainSliderData(response[0]);
        getImageUrls(response[0].imageGallery);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const getImageUrls = async (imageGallery: string[]) => {
    const builder = imageUrlBuilder(client);
  //Выглядит так будто тут не нужен async await, так как builder.image(image).url() работает синхронно
  //В таком случае нет смысла отдельно сохранять setImageUrls(urls), а они должны быть частью sliderData.
  //Например setMainSliderData({ ...response[0], imageGalery: getImageUrls(response[0]) })
  //И так во всех компонентах
    const urls = await Promise.all(
      imageGallery.map(async (image) => {
        const imageUrl = await builder.image(image).url();
        return imageUrl;
      })
    );

    setImageUrls(urls);
  };

  const handleImageClick = (url: string) => {
    setIsImageExpanded(true);
    setExpandedImageUrl(url);
  };

  const handleImageClose = () => {
    setIsImageExpanded(false);
    setExpandedImageUrl('');
  };

  if (!dataMainSlider) {
    return null;
  }

  const { leftTitle, rightTitle } = dataMainSlider;

  return (
    <div className='float-left w-full mt-20'>
      <TitleBlock text={leftTitle} listStyle='float-left text-left' />
      <TitleBlock text={rightTitle} listStyle='text-right slederRightTitle' />

      <Slider {...sliderSettings} className='w-full'>
        {imageUrls.map((url, index) => (
          <div key={index} onClick={() => handleImageClick(url)}>
            <img src={url} alt={`Image ${index + 1}`} className='w-full h-auto p-3.5' />
          </div>
        ))}
      </Slider>

      {isImageExpanded && (
        <div onClick={handleImageClose}>
          <img src={expandedImageUrl} alt="Expanded Image" className='fixed top-0 left-0 w-full h-full object-contain bg-[#000000cc] z-50' />
        </div>
      )}
    </div>
  );
};
