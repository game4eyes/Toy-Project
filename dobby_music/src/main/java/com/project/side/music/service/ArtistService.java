package com.project.side.music.service;

import com.project.side.music.dto.ArtistDetailsDTO;
import com.project.side.music.spotifyapi.token.CreateToken;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.Artist;
import com.wrapper.spotify.model_objects.specification.ArtistSimplified;
import com.wrapper.spotify.requests.data.artists.GetArtistRequest;
import lombok.RequiredArgsConstructor;
import org.apache.hc.core5.http.ParseException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class ArtistService {
    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(CreateToken.accesstoken())
            .build();
    private static GetArtistRequest getArtistRequest;
    public ArtistDetailsDTO getArtist_Sync(String q) {
        Artist artist;
        getArtistRequest = spotifyApi.getArtist(q).build();
        ArtistDetailsDTO artistDetailsDTO = new ArtistDetailsDTO();
        ArrayList<String> list = new ArrayList<String>();
        try {
            artist = getArtistRequest.execute();
            if (artist != null) {
                artistDetailsDTO.setArtistId(artist.getId());
                artistDetailsDTO.setArtistName(artist.getName());
                artistDetailsDTO.setArtistFollow(artist.getFollowers().getTotal());
                artistDetailsDTO.setArtistImg640(artist.getImages()[0].getUrl());
                artistDetailsDTO.setArtistImg300(artist.getImages()[1].getUrl());
                artistDetailsDTO.setArtistImg64(artist.getImages()[2].getUrl());
                for (int i = 0; i<artist.getGenres().length;i++) {
                    list.add(artist.getGenres()[i]);
                }
                artistDetailsDTO.setArtist_genres(list);
                artistDetailsDTO.setArtistPopularity(artist.getPopularity());
                return artistDetailsDTO;
            }
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            throw new RuntimeException(e);
        }

        return null;
    }
}
