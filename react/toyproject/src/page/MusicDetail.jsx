import React from 'react';
import Footer from './Footer';
import './css/MusicDetail.css';

/**@author_윤기님 */
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
      <div className="topDetailContainer">
        <div className="albumArtworkContainer">
          <img src={albumData.albumArtwork} alt="Album Artwork" className="albumArtwork" />
        </div>
        <div className="detailContainer"> {/* New container for the details */}
          <div className="categoryContainer">
            <span>곡</span>
          </div>
          <div className="trackTitleContainer">
            <h1 className="trackTitle">{albumData.albumTitle}</h1>
          </div>
          <div className="restDetail">
            <a className="artistName">{albumData.artistName}</a>
            <span className="dot">•</span>
            <a className="trackTitleDetail">{albumData.albumTitle}</a>
            <span className="dot">•</span>
            <span className="trackName">{albumData.albumDate}</span>
            <span className="dot">•</span>
            <span className="trackDuration">{albumData.duration}</span>
            <span className="dot">•</span>
            <span className="playcount">{albumData.playcount}</span>
          </div>
        </div>
      </div>
      <div className="etcThing">
      <div className="playButton">재생</div>
      </div>
      <Footer/>
    </div>
    );
    
}
export default MusicDetail;