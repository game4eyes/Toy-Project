package com.project.side.music.spotifyapi.search;

import com.project.side.music.spotifyapi.token.CreateToken;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.Artist;
import com.wrapper.spotify.model_objects.specification.Paging;
import com.wrapper.spotify.requests.data.search.simplified.SearchArtistsRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.Arrays;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;

public class SearchTest {
    // 검색어 초기 세팅
    // 아티스트 검색어
    private static String searchArtistKey = "에스파";
    // api access setting
    private static SpotifyApi spotifyApi = new SpotifyApi.Builder().setAccessToken(CreateToken.accesstoken()).build();
    private static SearchArtistsRequest searchArtistsRequest = spotifyApi.searchArtists(searchArtistKey)
            // 검색 결과 제한
            .limit(10)
            .build();
    // 아티스트로 검색
    public static String searchArtists_Sync(String searchArtistKey) {
        String resultItems = "";
        try {
            searchArtistsRequest = spotifyApi.searchArtists(searchArtistKey).build();
            final Paging<Artist> artistPaging = searchArtistsRequest.execute();
            resultItems = Arrays.toString(artistPaging.getItems());

        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
        // searchArtistKey로 검색한 결과를 resultItems 에 담아 리턴해줌
        return resultItems;
    }

    public static void main(String[] args) {
        System.out.println(searchArtists_Sync("마마무"));
    }
}
