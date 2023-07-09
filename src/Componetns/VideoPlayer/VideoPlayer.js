import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

export const VideoPlayer = ({ videoId, posterImageUrl, width, height }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          controls: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    return () => {
      script.remove();
      window.onYouTubeIframeAPIReady = undefined;
      window.YT = undefined;
    };
  }, [videoId]);

  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.cueVideoById(videoId);
    event.target.playVideo();
  };

  return (
    <div className={styles.videoContainer}>
      <div>
        {posterImageUrl && (
          <Image src={posterImageUrl} width={width} height={height} alt="Video Poster" />
        )}
      </div>
      {/* <div style={{ flex: 1 }}>
        <div id="youtube-player" />
      </div> */}
    </div>
  );
};
