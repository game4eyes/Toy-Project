import React, { useState } from 'react';
import './cpcss/MusicWidget.css';
import './cpcss/Slider.css';
import { GiResize } from "react-icons/gi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { CgMiniPlayer } from "react-icons/cg";
import VolumeSlider from './VolumeSlider';


function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-widget-container">
      <h2 className="widget-title">Music Player</h2>
      <div className="widget-content">
        <div className="play-pause-button-wrapper">
          <IoPlayCircleOutline className={`play-pause-button ${isPlaying ? 'playing' : ''}`} onClick={togglePlay}/>
        </div>
        <input className="time-slider" type="range"/>
      </div>
      <div>
      <div>
      <VolumeSlider  />
      </div> 
        <CgMiniPlayer title="이건윤기님이ㅋ"/>
        <GiResize />
        </div>
      
    </div>
  );
}

export default MusicWidget;
