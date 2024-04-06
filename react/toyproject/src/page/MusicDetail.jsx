import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import MusicDetailArtist from "../component/MusicDetailArtist.jsx";
import './css/MusicDetail.css';
import ColorHistogram from '../component/ColorHistogram';


function MusicDetail(){
    const {trackId} = useParams();
    const [trackInfo, setTrackInfo] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState('white'); // 배경색 state 추가

    useEffect(() => {
        // Axios를 사용하여 API 호출
        axios.get('http://localhost:9090/api/Tracks/' + trackId)
            .then((response) => {
                // 요청이 성공하면, 응답 데이터를 상태에 저장
                setTrackInfo(response.data);
                console.log(trackInfo)
            })
            .catch(error => {
                // 요청이 실패하면, 오류 처리
                console.error('There was an error!', error);
            });
    }, [trackId]);
    useEffect(() => {
        console.log(trackInfo)
    }, [trackInfo]);

    // 로딩 상태 처리
    if (!trackInfo) {
        return <div>Loading...</div>;
    }

    // API에서 받은 데이터로 UI를 구성
    return (
        <div className="musicDetailContainer">
            {/* ... 기타 코드 */}
            <div className="topDetailContainer" style={{ background: 'linear-gradient(white, transparent)' }}>
                <div className="albumArtworkContainer">
                    <ColorHistogram imageUrl={trackInfo.album_image_640} alt="Album Artwork" className="albumArtwork"/>
                </div>
                <div className="detailContainer">
                    {/* ... */}
                    <div className="trackTitleContainer">
                        <h1 className="trackTitle">{trackInfo.track_Name}</h1>
                    </div>
                    <div className="restDetail">
                        {trackInfo.artist_Simplifieds.map((artist, index) => (
                            <React.Fragment key={artist.id}>
                                <a className="artistName" href={`/artist/${artist.id}`}>
                                    {artist.name}
                                </a>
                                {index < trackInfo.artist_Simplifieds.length - 1 && <span className="dot"> • </span>}
                            </React.Fragment>
                        ))}
                        <span className="dot"> • </span>
                        <a className="trackTitleDetail">{trackInfo.album_type}</a>
                        <span className="dot"> • </span>
                        <span className="trackName">{trackInfo.album_release_data}</span>
                    </div>
                    </div>
            </div>
            <div className="etcThing">
                <div className="playButton">재생</div>
            </div>
            <div className="musicDetailArtist">
                {trackInfo.artist_Simplifieds.map((artist) => (
                    <React.Fragment key={artist.id}>
                        <MusicDetailArtist id={artist.id} name={artist.name}/>
                    </React.Fragment>
                ))}
            </div>
            <Footer/>

    </div>

    );
}

export default MusicDetail;