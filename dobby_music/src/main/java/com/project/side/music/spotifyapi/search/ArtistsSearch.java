package com.project.side.music.spotifyapi.search;

import com.neovisionaries.i18n.CountryCode;
import com.project.side.music.spotifyapi.token.CreateToken;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.Artist;
import com.wrapper.spotify.model_objects.specification.ArtistSimplified;
import com.wrapper.spotify.model_objects.specification.Paging;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.requests.data.search.simplified.SearchArtistsRequest;
import com.wrapper.spotify.requests.data.search.simplified.SearchTracksRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;
public class ArtistsSearch {
    static String accessToken = CreateToken.accesstoken();
    static String q = "";

    static SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();

    public static ArtistSimplified searchTracks_Sync(String q) {
        SearchTracksRequest searchTracksRequest = spotifyApi.searchTracks(q)
                .market(CountryCode.US)
                .limit(10)
//		          .offset(0)
//		          .includeExternal("audio")
                .build();
        String preview = "";
        Track track=null;
        ArtistSimplified artist=null;
        try {
            final Paging<Track> trackPaging = searchTracksRequest.execute();
            int length = trackPaging.getItems().length;
            System.out.println(length);
//			System.out.println("Total: " + trackPaging.getTotal());
            for(int i = 0; i<=length;i++) {
                track = trackPaging.getItems()[i];    //해당가수의 첫번째 음악
                System.out.println("제목 : " + track.getName());
                System.out.println("가수 : " + track.getArtists()[i].getName());

                artist = trackPaging.getItems()[i].getArtists()[i];    //해당 노래를 부르는 메인 가수
                preview = trackPaging.getItems()[i].getPreviewUrl();    //미리듣기
                System.out.println("미리듣기 : " + preview);
            }
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        return artist;
    }
    public static void main(String[] args) {
        ArtistSimplified artist=searchTracks_Sync("Abba");
    }
}