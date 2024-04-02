import React, {useState,useEffect} from 'react';
import Footer from './Footer';
import './css/MusicDetail.css';
import axios from 'axios';


/**@author_윤기님 */
const albumData = {
    albumTitle: "Happier",
    artistName: "Ed sheeran",
    albumArtwork : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMDdfMjI4%2FMDAxNjk2NjU2OTc4Mjgx.s2zWHG_JN809P57nWRqxNyxkwFz0Ww3qKSDCSy184rMg.CbWKYjL1vT86sYS74lMmkMzibSUeZDH0JnM12zCa-k0g.JPEG.mlb2k9%2Fqq.jpg&type=sc960_832",
    albumDate : "2024",
    duration: "3:25",
    playcount: "123,456"
};

function MusicDetail() {
    // 상태를 업데이트하여 트랙의 상세 정보를 저장합니다.
    const [trackDetail, setTrackDetail] = useState(null);

    useEffect(() => {
        // Axios를 사용하여 HTTP GET 요청을 보냅니다.
        axios.get('api/Tracks/7x9aauaA9cu6tyfpHnqDLo')
            .then(response => {
                // 응답으로 받은 데이터를 상태에 저장합니다.
                setTrackDetail(response.data);
            })
            .catch(error => console.error('There was an error!', error));
    }, []);

    // trackDetail 상태가 null이 아니면 데이터를 표시합니다.
    // 상태가 null인 경우 로딩 표시나 대체 텍스트를 표시할 수 있습니다.
    return (
        <div className="musicDetailContainer">
            {trackDetail ? (
                <>
                    <div className="topDetailContainer">
                        <div className="albumArtworkContainer">
                            {/* 앨범 이미지를 표시합니다. */}
                            <img src={trackDetail.album_image_640} alt="Album Artwork" className="albumArtwork" />
                        </div>
                        <div className="detailContainer">
                            <div className="trackTitleContainer">
                                {/* 트랙 이름을 표시합니다. */}
                                <h1 className="trackTitle">{trackDetail.track_Name}</h1>
                            </div>
                            {/* 아티스트 이름을 표시합니다. 예제에서는 첫 번째 아티스트만 표시합니다. */}
                            <div className="restDetail">
                                <a className="artistName">{trackDetail.artist_Simplifieds[0].name}</a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            ) : (
                <div>Loading...</div> // 데이터를 불러오는 동안 표시할 내용
            )}
        </div>
    );
}

export default MusicDetail;