import React, { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

export const VideoPlayer = ({ videoId, posterImageUrl, width, height }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
    <div className={styles.videoContainer} >
      {!showVideo && (
        <button onClick={handlePlay} className={styles.posterImage} style={{height: height}}>
          <Image src={posterImageUrl} width={width} height={height} alt="Video Poster" />
          <span className={styles.playButton}></span>
        </button>
      )}
      {showVideo && (
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            width={width}
            height={height}
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      )}
    </div>
  );
};
