import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface VideoPlayerProps {
  videoId: string;
  posterImageUrl: string;
  width: number;
  height: number;
  className?: string;
}

export const VideoPlayer = ({ videoId, posterImageUrl, width, height, className }: VideoPlayerProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
      <div className={classNames('relative left-0 float-left mt-10', className)}>
      {showVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          width={width}
          height={height}
          allowFullScreen
          title="YouTube Video"
        />

      ) : (
        <button onClick={handlePlay} className='rounded-3xl' style={{ height }}>
          <Image src={posterImageUrl} width={width} height={height} alt="Video Poster" />
          <span className="absolute top-1/2 left-1/2 w-14 h-14 cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
            <Image src='/images/play-but.svg' width={56} height={56} alt="play" />
          </span>
        </button>
      )}
    </div>
  );
};
