package com.project.side.music.service;


import com.project.side.music.dto.TrackDetailsDTO;
import com.project.side.music.spotifyapi.token.CreateToken;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.ArtistSimplified;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.requests.data.tracks.GetTrackRequest;
import lombok.RequiredArgsConstructor;
import org.apache.hc.core5.http.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;


@Service
@RequiredArgsConstructor
public class TrackService {
    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(CreateToken.accesstoken())
            .build();

    private static GetTrackRequest getTrackRequest;

    public static TrackDetailsDTO getTrack_Sync(String id) {
        Track track;
        getTrackRequest = spotifyApi.getTrack(id).build();
        TrackDetailsDTO trackDetailsDTO = new TrackDetailsDTO();
        ArrayList<ArtistSimplified> artistSimplifieds = new ArrayList<>();
        try {
            track = getTrackRequest.execute();
            if (track != null) {
                trackDetailsDTO.setAlbum_Id(track.getAlbum().getId());
                trackDetailsDTO.setAlbum_image_640(track.getAlbum().getImages()[0].getUrl());
                trackDetailsDTO.setAlbum_image_300(track.getAlbum().getImages()[1].getUrl());
                trackDetailsDTO.setAlbum_image_64(track.getAlbum().getImages()[2].getUrl());
                trackDetailsDTO.setAlbum_type(track.getAlbum().getAlbumType().getType());
                trackDetailsDTO.setAlbum_release_data(track.getAlbum().getReleaseDate());
                System.out.println(track.getArtists().length);
                for(int i = 0; i < track.getArtists().length;i++) {
                    artistSimplifieds.add(track.getArtists()[i]);
                    trackDetailsDTO.setArtist_Simplifieds(artistSimplifieds);
                }
                trackDetailsDTO.setTrack_duration_ms(track.getDurationMs());
                trackDetailsDTO.setTrack_Id(track.getId());
                trackDetailsDTO.setTrack_Name(track.getName());
                trackDetailsDTO.setTrack_popularity(track.getPopularity());
                trackDetailsDTO.setTrack_preview_url(track.getPreviewUrl());
                System.out.println("널 아님");
                return trackDetailsDTO;
            }
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            throw new RuntimeException(e);
        }
        System.out.println(" 널임");
        return null;
    }
}
git