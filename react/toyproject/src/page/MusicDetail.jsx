import React from 'react';
import Footer from './Footer';
import './css/MusicDetail.css';

const albumData = {
    albumTitle: "Happier",
    artistName: "Ed sheeran",
    albumArtwork : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMDdfMjI4%2FMDAxNjk2NjU2OTc4Mjgx.s2zWHG_JN809P57nWRqxNyxkwFz0Ww3qKSDCSy184rMg.CbWKYjL1vT86sYS74lMmkMzibSUeZDH0JnM12zCa-k0g.JPEG.mlb2k9%2Fqq.jpg&type=sc960_832",
    albumDate : "2024",
    duration: "3:25",
    playcount: "123,456"
};

function MusicDetail(){
    return(
        <div className="musicDetailContainer">
          <div clssName="topDetailContainer">
            <div clssName="albumArtworkContainer">
              <img src={albumData.albumArtwork} alt="앨범 아트워크"
              className="albumArtwork" />
            </div>
            <div className="categoryContainer">
              <span>곡</span>
            </div>
            <div clssName="trackTitleContainer">
              <h1 className="trackTitle">{albumData.albumTitle}</h1>
            </div>
            <div clssName="restDetail">
              <a className="artistName">{albumData.artistName}</a>
              <span clssName="dott">•</span>
              <a clssName="trackTitleDetail">{albumData.albumTitle}</a>
              <span clssName="dott">•</span>
              <span className="trackName">{albumData.albumDate}</span>
              <span clssName="dott">•</span>
              <span className="trackDuration">{albumData.duration}</span>
              <span clssName="dott">•</span>
              <span className="playcount">{albumData.playcount}</span>
            </div>
          </div>
        <div className="playButton">재생</div>
      <Footer/>
    </div>
    );
    
}
export default MusicDetail;