"use client";
import React, { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { Subtitle } from '../Tags/SubTitle/SubTitle';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

interface Video {
  videoLink: string;
  backgroundImage: string;
}

interface VideoReviewsProps { }

export const VideoReviews: React.FC<VideoReviewsProps> = () => {
  const [videoReviews, setVideoReviews] = useState<{ title: string; videos: Video[] }>({
    title: '',
    videos: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch('*[_type == "reviewsVideo"]');
        setVideoReviews({ title: response[0].title, videos: response[0].videos });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const builder = imageUrlBuilder(client);

  return (
    <div className='float-left mt-28 w-full'>
      <Subtitle>{videoReviews.title}</Subtitle>
      <div className='flex justify-between flex-wrap'>
        {videoReviews.videos.map((video, index) => {
          const imageUrl = video.backgroundImage ? builder.image(video.backgroundImage).url() : '';
          return (
            <VideoPlayer
              key={index} 
              videoId={video.videoLink}
              posterImageUrl={imageUrl}
              width={606}
              height={332}
              className='flex-[0_0_45%] mx-4 my-0'
            />
          );
        })}
      </div>

    </div>
  );
};
