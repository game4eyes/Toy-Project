import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from "./cpcss/MusicDetailArtist.module.css"

function MusicDetailArtist(props){
    const hrefId = "아티스트디테일/"+props.id;
    return (
        <div>
            <div>
                <a href={hrefId} className={style.flex}>
                    <div>
                        <img className={style.artistimg} src="https://i.scdn.co/image/ab6761610000e5eb40a7268dd742e5f63759b960" alt=""/>
                    </div>
                    <div className={style.info}>
                        <div >아티스트</div>
                        <div>{props.name}</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default MusicDetailArtist;