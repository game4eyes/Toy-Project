package com.project.side.music.dto;

import com.wrapper.spotify.model_objects.specification.ArtistSimplified;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter @Setter
public class TrackDetailsDTO {
    // 앨범 정보를 담음
    // 필요 데이터
    // album_Id 앨범 아이디
    // album_image_640,300,64
    // release_date 출시 날짜
    // type 앨범 타입
    private String album_Id;
    private String album_image_640;
    private String album_image_300;
    private String album_image_64;
    private String album_release_data;
    private String album_type;
    // 아티스트 정보를 담음
    // id
    // name
    // type
    private ArrayList<ArtistSimplified> artist_Simplifieds
            = new ArrayList<>();


    // 음악 지속 시간 (ms)
    private Integer track_duration_ms;
    // 트랙 고유 아이디
    private String track_Id;
    // 트랙 이름(음악 제목)
    private String track_Name;
    // 음악 인기 (1~100)
    private Integer track_popularity;
    // 30초 미리 듣기 주소
    private String track_preview_url;

}
