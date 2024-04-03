import React, { useState, useEffect } from 'react';
import './cpcss/MusicWidget.css';
import './cpcss/Slider.css';
import { GiResize } from "react-icons/gi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { CgMiniPlayer } from "react-icons/cg";
import VolumeSlider from './VolumeSlider';
import { CgArrowTopRight } from "react-icons/cg";
import { IoShuffle } from "react-icons/io5";
import { SlLoop } from "react-icons/sl";
import { CiCircleCheck } from "react-icons/ci";
import { ImNext2 } from "react-icons/im";
import { ImPrevious2 } from "react-icons/im";
import { HiQueueList } from "react-icons/hi2";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { FaRegCirclePause } from "react-icons/fa6";

function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false); // 재생상태확인,플레이버튼관리
  const nowplaying = { /* 현재 재생 중인 음악 정보 이미지부분 지정*/ };
  
  /**재생시간 슬라이더 설정 */
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(180); // 예시로 총 재생 시간을 180초(3분)으로 설정합니다.
  
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSliderChange = (e) => {
    setCurrentTime(parseInt(e.target.value));
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // 슬라이더의 배경 스타일을 동적으로 계산 : 슬라이더 드래그 색변화.
  const timesliderStyle = {
    background: `linear-gradient(to right, #81b71a 0%, #81b71a ${(currentTime / totalTime) * 100}%, white ${(currentTime / totalTime) * 100}%, white 100%)`
  };

  // 플레이버튼 토글
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-widget-container">
    <div className="widget-header">
      <div key={nowplaying.id} className="MusicWidget-img">
        {/* 이미지 URL을 표시하는 대신 여기에 이미지를 넣으세요 */}
        <img src={nowplaying.imageUrl} alt={nowplaying.name} />
        <CgArrowTopRight className="hover-button" title='확장'/>
      </div>
      <h2 className="widget-title">Music title <br/><span>artist</span></h2>
        <CiCircleCheck className='plus-button'/>
        {/**@CiCircleCheck_LibrarySidebar 컴포넌트*/}
      </div>
    <div className="widget-content">
      <div className="play-pause-button-wrapper">
          <IoShuffle size={20} />
          <ImPrevious2 size={20}/>
          {isPlaying ? (
            <FaRegCirclePause className="play-pause-button" onClick={togglePlay} />
          ) : (
            <IoPlayCircleOutline className="play-pause-button" onClick={togglePlay} />
          )}
          <ImNext2 className="Fast-forward-btn" size={20}/>
          <SlLoop size={20}/> 
      </div>
      {/*시간 슬라이더 위치. 밸류값 수정*/ }
    <div className="time-display">
          <span>{formatTime(currentTime)}</span>
    <input className="time-slider" type="range" min="0" max={totalTime} value={currentTime} onChange={handleSliderChange} style={timesliderStyle}/>    
          <span>{formatTime(totalTime)}</span>
          </div>
        </div>
      <div style={{ display: 'flex', alignItems: 'center' ,  gap: '5px'}}>
        <div>
           <HiQueueList title='현재 재생목록'/>
           <LiaMicrophoneAltSolid title='가사'/>
        </div>
        <div>
            <VolumeSlider />
      </div> 
          <CgMiniPlayer title="이건윤기님이ㅋ"/>
          <GiResize />
      </div>
      
        </div>
    );
}

export default MusicWidget;
