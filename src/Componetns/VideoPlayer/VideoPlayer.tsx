import React, { useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoId: string;
  posterImageUrl: string;
  width: number;
  height: number;
}

export const VideoPlayer = ({ videoId, posterImageUrl, width, height }: VideoPlayerProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative left-0 float-left mt-10" >
      {showVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          width={width}
          height={height}
          allowFullScreen
          title="YouTube Video"
        ></iframe>

      ) : (
        <button onClick={handlePlay} className='rounded-3xl' style={{ height }}>
          <Image src={posterImageUrl} width={width} height={height} alt="Video Poster" />
          {/* WTF: why is the img not center?  */}
          <span className="absolute top-1/2 left-1/2 w-14 h-14 cursor-pointer bg-[url('/images/play-but.svg')] bg-no-repeat"></span>
        </button>
      )}
    </div>
  );
};
