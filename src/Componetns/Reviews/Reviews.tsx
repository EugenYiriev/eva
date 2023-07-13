"use client";
import styles from './style.module.scss';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../../sanity/lib/client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Reviews = () => {
  const [title, setTitle] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState('');

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  const getImageUrls = async (imageGallery) => {
    const builder = imageUrlBuilder(client);

    const urls = await Promise.all(
      imageGallery.map(async (image) => {
        const imageUrl = await builder.image(image).url();
        return imageUrl;
      })
    );

    setImageUrls(urls);
  };

  const handleImageClick = (url) => {
    setIsImageExpanded(true);
    setExpandedImageUrl(url);
  };

  const handleImageClose = () => {
    setIsImageExpanded(false);
    setExpandedImageUrl('');
  };

  return (
    <div className={styles.reviews}>
      <Subtitle text={title} />
      <div className={styles.sliderContainer}>
        <Slider {...slideSettings} className={styles.slider}>
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Review Image ${index}`}
                className={styles.image}
                onClick={() => handleImageClick(url)}
              />
            </div>
          ))}
        </Slider>
      </div>
      {isImageExpanded && (
        <div
          className={styles.expandedImageContainer}
          onClick={handleImageClose}
        >
          <img
            src={expandedImageUrl}
            alt="Expanded Image"
            className={styles.expandedImage}
          />
        </div>
      )}
    </div>
  );
};
