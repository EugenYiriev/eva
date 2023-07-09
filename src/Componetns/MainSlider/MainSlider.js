"use client";
import { useState, useEffect } from 'react';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';
import { TitleBlock } from './TitleBlock/TitleBlock';
import imageUrlBuilder from '@sanity/image-url';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MainSlider = () => {
  const [dataMainSlider, setMainSliderData] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState('');

  const settings = {
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
    async function fetchData() {
      try {
        const response = await client.fetch('*[_type == "mainSlider"]');
        setMainSliderData(response[0]);
        getImageUrls(response[0].imageGallery);
      } catch (error) {
        console.error('Error:', error);
      }
    }

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

  if (!dataMainSlider) {
    return null;
  }

  const { leftTitle, rightTitle } = dataMainSlider;

  return (
    <div className={styles.mainSlider}>
      <TitleBlock text={leftTitle} listStyle={styles.leftTitle} />
      <TitleBlock text={rightTitle} listStyle={styles.rightTitle} />

      <Slider {...settings} className={styles.slider}>
        {imageUrls.map((url, index) => (
          <div key={index} onClick={() => handleImageClick(url)}>
            <img src={url} alt={`Image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </Slider>

      {isImageExpanded && (
        <div className={styles.expandedImageContainer} onClick={handleImageClose}>
          <img src={expandedImageUrl} alt="Expanded Image" className={styles.expandedImage} />
        </div>
      )}
    </div>
  );
};
