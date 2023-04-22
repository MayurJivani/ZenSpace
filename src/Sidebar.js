import React from "react";
import  { useState } from "react";
import './navbar.css';
import YouTube, { YouTubeProps } from 'react-youtube';
import CountDown from "./CountDown";


export default function Sidebar(){
    const [step, setStep] = useState(0);
    const [volumeBTN, setvolumeBTN] = useState(true);
    const [sidebar, setSidebar] = useState(false);
    const [CTimer, setCTimer] = useState(false);
    const showTimer = () => setCTimer(!CTimer)
    const showSidebar = () => setSidebar(!sidebar)
    const [YTsearch, setYTsearch] = useState(false);
    const showYTsearch = () => setYTsearch(!YTsearch) 
    const [propvid, spropvid] = useState("sUwD3GRPJos"); 
    const [propaud, spropaud] = useState("75EYy4cI4_U");
    const [vidlink, svidlink] = useState("YT Video Link");
    const [audlink, saudlink] = useState("YT Audio Link");
    const HandleVidLink = ()=>{
        var url=vidlink
        var newVURI
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            newVURI=match[2];
            setYTsearch(false);
            spropvid(newVURI);
            
            
        } else {
        //error
        }
        
    }
    const HandleVidLinkChange = (event)=>{
        svidlink(event.target.value)
    }
    const HandleAudLink = ()=>{
        var url=audlink
        var newAURI
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            newAURI=match[2];
            setYTsearch(false);
            setStep(1);
            setvolumeBTN(!volumeBTN);
            spropaud(newAURI);
        } else {
        //error
        }
        console.log(propvid)
    }
    const HandleAudLinkChange = (event)=>{
        saudlink(event.target.value)
    }
    
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        
        event.target.setVolume(100);
        event.target.playVideo();
    }
    const onMPlayerReady: YouTubeProps['onReady'] = (event) => {
        
        event.target.setVolume(0);
        event.target.playVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '1080',
        width: '1920',
        playerVars: {
            controls: 0,
            autoplay: 1,
            modestbranding: 1,
        },
    

    };
    const onMusicReady: YouTubeProps['onReady'] = (event) => {
        event.target.setVolume(100);
        event.target.playVideo();
    }
    const onMMusicReady: YouTubeProps['onReady'] = (event) => {
        event.target.setVolume(0);
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
    const onVol=()=>{
        if(step==1){
            setStep(0)
            setvolumeBTN(!volumeBTN)
        }else{
            setStep(1)
            setvolumeBTN(!volumeBTN)
        }
        
    }
    return (
     
        <div className="App">
            
            <div className={sidebar ? 'sidebar open' : 'sidebar close'}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="./logo.svg" alt="" />
                        </span>

                        <div className="text logo-text">
                            <span className="name">ZenSpace</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' onClick={showSidebar}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <div className="search-box">
                            <li className="btn-box">
                                <span>🪟</span>
                            </li>
                            <li className="btn-box">
                                <span>🌻</span>
                            </li>
                            <li className="btn-box">
                                <span>🪴</span>
                            </li>
                            <li className="btn-box">
                                <span>🏚️</span>
                            </li>
                            <li className="btn-box">
                                <span>✨</span>
                            </li>
                            <li className="btn-box">
                                <span>🗻</span>
                            </li>
                        </div>

                        <ul className="menu-links">
                            <li className="nav-link">
                               
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                
                            </li>

                            <li className="nav-link">
                            
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Spaces</span>
                                
                            </li>

                            <li className="nav-link">
                                
                                    <i className='bx bx-notepad icon'></i>
                                    <span className="text nav-text">Todo</span>
                                
                            </li>

                            <li className="nav-link">
                                    <a onClick={showTimer}>
                                    <i className='bx bx-time  icon' ></i>
                                    <span className="text nav-text">Timer</span>
                                    </a>
                            </li>

                            <li className="nav-link">
                                    <a onClick={showYTsearch}>
                                    <i className='bx bx-search icon'></i>
                                    <span className="text nav-text" >Customs</span>
                                    </a>
                            </li>

                        

                        </ul>
                    </div>
                </div>

            </div>
            
            <div className={YTsearch ? 'YTsearch open' : 'YTsearch close'}>
                <input type='text' className='YTvid' placeholder={vidlink} onChange={HandleVidLinkChange}></input>
                <button className="submit-vid" onClick={HandleVidLink}>Submit Video</button>
                <input type='text' className='YTaud' placeholder={audlink} onChange={HandleAudLinkChange}></input>
                <button className="submit-aud" onClick={HandleAudLink}>Submit Audio</button>
            </div>
            <div className='BackVid'>
                {step == 0 && <YouTube videoId={propvid} opts={opts} onReady={onPlayerReady}/>}
                {step == 1 && <YouTube videoId={propvid} opts={opts} onReady={onMPlayerReady}/>}
                
                   
            </div>
            <div className={CTimer ? 'Timer open' : 'Timer close'}>
                    <CountDown/>
             </div>
                {step == 1 && <YouTube videoId={propaud} opts={musicopts} onReady={onMusicReady}/>}
                <button className={volumeBTN ? 'volumeBTN ummute' : 'volumeBTN mute'} onClick={onVol}><i class='bx bx-volume-full bx-md' id="volumestyle"></i></button>
                
        </div>
        
    )
}



