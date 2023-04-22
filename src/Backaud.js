import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';

export default function BackAud() {
    const onMusicReady: YouTubeProps['onReady'] = (event) => {
        event.target.setVolume(100);
        event.target.playVideo();
    }
    const musicopts: YouTubeProps['opts'] = {
        height: '100',
        width: '100',
        playerVars: {
            controls: 0,
            autoplay: 1,
            modestbranding: 1,
        },
    };

  return (
    <div>
            <div className='BackAud'>
            <YouTube videoId="75EYy4cI4_U" opts={musicopts} onReady={onMusicReady}/>   
            </div>

    </div>
  )
}
