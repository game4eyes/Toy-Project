package com.project.side.music.service;


import com.neovisionaries.i18n.CountryCode;
import com.project.side.music.dto.TrackDetailsDTO;
import com.project.side.music.spotifyapi.token.CreateToken;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.Recommendations;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.model_objects.specification.TrackSimplified;
import com.wrapper.spotify.requests.data.browse.GetRecommendationsRequest;
import lombok.RequiredArgsConstructor;
import org.apache.hc.core5.http.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class TrackRecommendationsService {
    private static SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(CreateToken.accesstoken())
            .build();
    private static GetRecommendationsRequest getRecommendationsRequest;
    private static final TrackService trackService = null;

    public static ArrayList<TrackDetailsDTO> getRecommendations_Sync(String artistId, String trackId, int limite) {
        getRecommendationsRequest = spotifyApi.getRecommendations()
                .limit(limite)
                .market(CountryCode.KR)
                .seed_artists(artistId)
                .seed_tracks(trackId)
                .min_popularity(80)
                .build();
        Recommendations recommendations;
        ArrayList<TrackDetailsDTO> trackArrayList = new ArrayList<>();
        ArrayList<String> recommendationsTrackIdList = new ArrayList<>();
        try {
            recommendations=getRecommendationsRequest.execute();
            TrackSimplified[] trackSimplified = recommendations.getTracks();
            if (trackSimplified != null) {
                for (int i = 0;i<limite;i++) {
                    recommendationsTrackIdList.add(trackSimplified[i].getId());
                }
                for (int i = 0;i<limite;i++) {
                    trackArrayList.add(trackService.getTrack_Sync(recommendationsTrackIdList.get(i)));
                }
                return trackArrayList;
            }
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            throw new RuntimeException(e);
        }
        return null;
    }
}
