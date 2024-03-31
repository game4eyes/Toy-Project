import React from 'react';
import './css/MusicDetail.css';

function MusicDetail(){
    return(
        <div className="musicDetailContainer">
            <h2 className="trackTitle">트랙 제목</h2>
            <p className="artistName">아티스트 이름</p>
            <div className="playButton">재생</div>
        </div>
    );
}
export default MusicDetail;