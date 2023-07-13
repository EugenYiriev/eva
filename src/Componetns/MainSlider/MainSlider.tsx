"use client";
import { useState, useEffect } from 'react';
import client from '../../../sanity/lib/client';
import styles from './style.module.scss';
import { TitleBlock } from './TitleBlock/TitleBlock';
import imageUrlBuilder from '@sanity/image-url';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MainSliderData {
  leftTitle: string;
  rightTitle: string;
  imageGallery: string[];
}

interface MainSliderProps {}

export const MainSlider: React.FC<MainSliderProps> = () => {
  const [dataMainSlider, setMainSliderData] = useState<MainSliderData | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState<string>('');

  //TODO: Move slideSettings out of component. Otherwise it will be recreated on every render
  // Better to move it in separate file and import it
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
