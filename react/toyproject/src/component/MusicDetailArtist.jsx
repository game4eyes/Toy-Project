import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from "./cpcss/MusicDetailArtist.module.css"

function MusicDetailArtist(props){
    const [artistDetails, setArtistDetails] = useState({});
    useEffect(() => {
        axios.get('http://localhost:9090/api/Artist/'+props.id)
            .then((Response) => {
                setArtistDetails(Response.data);
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
    },[props.id]);
    useEffect(() => {
        console.log(artistDetails)
    }, [artistDetails]);
    const hrefId = "아티스트디테일/"+props.id;
    return (
        <div>
            <div>
                <a href={hrefId} className={style.flex}>
                    <div>
                        <img className={style.artistimg} src={artistDetails.artistImg640} alt=""/>
                    </div>
                    <div className={style.info}>
                        <div >아티스트</div>
                        <div>{artistDetails.artistName}</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default MusicDetailArtist;