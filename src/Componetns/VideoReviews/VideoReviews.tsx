"use client";
import React, { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import styles from './style.module.scss';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

export const VideoReviews = () => {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch('*[_type == "reviewsVideo"]');
        setVideos(response[0].videos);
        setTitle(response[0].title);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const builder = imageUrlBuilder(client);

  return (
    <div className={styles.videoReviews}>
      <Subtitle text={title} />
      <div className={styles.videoContainer}>
        {videos.map((video, index) => {
          const imageUrl = video.backgroundImage ? builder.image(video.backgroundImage).url() : '';

          return (
            <div key={index} className={styles.videoItem}>
              <VideoPlayer
                videoId={video.videoLink}
                posterImageUrl={imageUrl}
                width={606}
                height={332}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};