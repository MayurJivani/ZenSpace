import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Backvid() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '1080',
        width: '1920',
        playerVars: {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
        },
    };
    return (

        <div className='BackVid'>
            <YouTube videoId="sUwD3GRPJos" opts={opts} onReady={onPlayerReady}/>
            
        </div>
    )
}
