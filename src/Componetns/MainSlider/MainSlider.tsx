"use client";
import React, { useState, useEffect } from 'react';
import client from '../../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSettings } from './sliderSettings';
import { Subtitle } from '../Tags/SubTitle/SubTitle';

interface MainSliderData {
  leftTitle: string;
  rightTitle: string;
  imageGallery: string[];
  imageUrls: string[];
}

interface MainSliderProps { }

export const MainSlider: React.FC<MainSliderProps> = () => {
  const [dataMainSlider, setMainSliderData] = useState<MainSliderData | null>(null);
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: MainSliderData[] = await client.fetch('*[_type == "mainSlider"]');
        const mainSliderData = response[0];
        const imageUrls = await getImageUrls(mainSliderData.imageGallery);
        setMainSliderData({ ...mainSliderData, imageUrls });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const getImageUrls = async (imageGallery: string[]) => {
    const builder = imageUrlBuilder(client);
    const urls = await Promise.all(
      imageGallery.map(async (image) => {
        const imageUrl = await builder.image(image).url();
        return imageUrl;
      })
    );

    return urls;
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

  const { leftTitle, rightTitle, imageUrls } = dataMainSlider;

  return (
    <div className='float-left w-full mt-20'>
      <Subtitle>{leftTitle}</Subtitle>
      <h3 className='text-white text-3xl font-medium text-right slederRightTitle'>{rightTitle}</h3>

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
