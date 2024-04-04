import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import MusicDetailArtist from "../component/MusicDetailArtist.jsx";
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
    const [trackInfo, setTrackInfo] = useState(null);
    const [artistDetails, setArtistDetails] = useState({});

    useEffect(() => {
        // Axios를 사용하여 API 호출
        axios.get('http://localhost:9090/api/Tracks/7x9aauaA9cu6tyfpHnqDLo')
            .then((response) => {
                // 요청이 성공하면, 응답 데이터를 상태에 저장
                setTrackInfo(response.data);
                console.log(trackInfo)
            })
            .catch(error => {
                // 요청이 실패하면, 오류 처리
                console.error('There was an error!', error);
            });
    }, []);
    // const artistid = trackInfo.artist_Simplifieds.id;
    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/Tracks/'+artistid)
    //         .then((Response) => {
    //             setArtistDetails(Response.data);
    //         })
    //         .catch(error => {
    //             console.log('There was an error!', erro);
    //         });
    // },[trackInfo]);

    // 로딩 상태 처리
    if (!trackInfo) {
        return <div>Loading...</div>;
    }

    // API에서 받은 데이터로 UI를 구성
    return (
        <div className="musicDetailContainer">
            {/* ... 기타 코드 */}
            <div className="topDetailContainer">
                <div className="albumArtworkContainer">
                    <img src={trackInfo.album_image_300} alt="Album Artwork" className="albumArtwork"/>
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
                {trackInfo.artist_Simplifieds.map((artist, index) => (
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