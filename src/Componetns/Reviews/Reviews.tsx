"use client";
import React, { useEffect, useState } from 'react';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../../sanity/lib/client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderSettings } from './sliderSettings';

interface ReviewsProps { }

export const Reviews: React.FC<ReviewsProps> = () => {
  const [title, setTitle] = useState<string>('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(`*[_type == "reviews"][0]{
            title,
            "imageGallery": imageGallery[].asset->url
          }`);

        setTitle(response.title);
        getImageUrls(response.imageGallery);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  const getImageUrls = (imageGallery: string[]) => {
    const builder = imageUrlBuilder(client);

    const urls = imageGallery.map((image) => {
      const imageUrl = builder.image(image).url();
      return imageUrl;
    });

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

  return (
    <div className='float-left mt-28 w-full'>
      <Subtitle>{title}</Subtitle>
      <Slider {...sliderSettings} className='w-full mt-10'>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Review Image ${index}`}
              className='w-full h-auto p-3.5'
              onClick={() => handleImageClick(url)}
            />
          </div>
        ))}
      </Slider>
      {isImageExpanded && (
        <div onClick={handleImageClose}>
          <img
            src={expandedImageUrl}
            alt="Expanded Image"
            className='fixed top-0 left-0 w-full h-full object-contain bg-[#000000cc] z-50'
          />
        </div>
      )}
    </div>
  );
};
