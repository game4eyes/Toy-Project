package com.project.side.music.service;


import com.neovisionaries.i18n.CountryCode;
import com.project.side.music.spotifyapi.token.CreateToken;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.Paging;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.requests.data.search.simplified.SearchTracksRequest;
import org.apache.hc.core5.http.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class TrackService {
    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(CreateToken.accesstoken())
            .build();
    private static SearchTracksRequest searchTracksRequest = null;
    private static SearchTracksRequest searchTracksRequestV1 = null;
    static Map<Integer, Track[]> pagingMap = new HashMap<Integer, Track[]>();


    public static Track[] searchTrack_Sync(String q, Integer k) {
        searchTracksRequest = spotifyApi.searchTracks(q).market(CountryCode.KR).build();
        Paging<Track> trackPaging;
        Paging<Track> trackPaging1;
        try {
            trackPaging = searchTracksRequest.execute();
            Integer seq = 0;
            while(seq <= trackPaging.getTotal()) {
                searchTracksRequestV1 = spotifyApi.searchTracks(q).market(CountryCode.KR).limit(1).offset(seq).build();
                trackPaging1 = searchTracksRequestV1.execute();
                pagingMap.put(seq,trackPaging1.getItems());
                seq++;
            }
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return pagingMap.get(k);
    }
    public static Integer trackTotal_Sync(String q) {
        searchTracksRequest = spotifyApi.searchTracks(q).market(CountryCode.KR).build();
        Paging<Track> trackPaging = null;
        try {
            trackPaging = searchTracksRequest.execute();

        }  catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return trackPaging.getTotal();
    }

}
