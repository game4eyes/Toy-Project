import { useState } from "react";
import './cpcss/Slider.css';
import { PiSpeakerSimpleLowFill } from "react-icons/pi";
import { PiSpeakerSimpleXFill } from "react-icons/pi";

function VolumeSlider(){
    const [volume, setVolume] = useState(50); // 볼륨 초기값 설정 (0 ~ 100)
    const [isMuted, setIsMuted] = useState(false); // 음소거 여부 상태 추가

    const handleVolumeChange = (event) => {
      setVolume(event.target.valueAsNumber);
      setIsMuted(event.target.valueAsNumber == 0); // 볼륨이 0이면 음소거로 처리
    };

    return(
        <div>
         {isMuted ? <PiSpeakerSimpleXFill onClick={() => setIsMuted(false)} /> : <PiSpeakerSimpleLowFill onClick={() => setVolume(0)} />}
        <input
        className="volume-slider"
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={handleVolumeChange}
    
/>
        </div>
    );
}
export default VolumeSlider;
