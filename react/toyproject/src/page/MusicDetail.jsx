import React from 'react';
import Footer from './Footer';
import './css/MusicDetail.css';

/**@author_윤기님 */
const albumData = {
    albumTitle: "Wilting",
    artistName: "Glass Trio",
    albumArtwork : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMDdfMjI4%2FMDAxNjk2NjU2OTc4Mjgx.s2zWHG_JN809P57nWRqxNyxkwFz0Ww3qKSDCSy184rMg.CbWKYjL1vT86sYS74lMmkMzibSUeZDH0JnM12zCa-k0g.JPEG.mlb2k9%2Fqq.jpg&type=sc960_832",
    tracks: [
      { name: "Thank God It's Friday", duration: "3:53" },
      { name: "I Can Always Tell", duration: "3:23" },
      { name: "Back When", duration: "4:03" },

    ]
  };

function MusicDetail(){
    return(
        <div className="musicDetailContainer">
        
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
            <span className="trackName">{track.name}</span>
            <span clssName="dott">•</span>
            <span className="trackDuration">{track.duration}</span>
            <span clssName="dott">•</span>
            <span className="playcount">{track.duration}</span>
          </div>
        
        <div className="playButton">재생</div>
      <Footer/>
    </div>
    );
    
}
export default MusicDetail;