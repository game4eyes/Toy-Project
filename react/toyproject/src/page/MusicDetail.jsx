import React from 'react';
import Footer from './Footer';
import './css/MusicDetail.css';

const albumData = {
    albumTitle: "Wilting",
    artistName: "Glass Trio",
    tracks: [
      { name: "Thank God It's Friday", duration: "3:53" },
      { name: "I Can Always Tell", duration: "3:23" },
      { name: "Back When", duration: "4:03" },

    ]
  };

function MusicDetail(){
    return(
        <div className="musicDetailContainer">
        <h2 className="trackTitle">{albumData.albumTitle}</h2>
        <p className="artistName">{albumData.artistName}</p>
        <div className="trackList">
        {albumData.tracks.map((track, index) => (
          <div key={index} className="trackItem">
            <span className="trackName">{track.name}</span>
            <span className="trackDuration">{track.duration}</span>
          </div>
        ))}
      </div>
      <div className="playButton">재생</div>
      <Footer/>
    </div>
    );
    
}
export default MusicDetail;