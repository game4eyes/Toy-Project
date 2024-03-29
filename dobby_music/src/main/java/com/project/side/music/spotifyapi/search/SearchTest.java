package com.project.side.music.spotifyapi.search;

import com.project.side.music.spotifyapi.token.CreateToken;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.Album;
import com.wrapper.spotify.model_objects.specification.AlbumSimplified;
import com.wrapper.spotify.model_objects.specification.Artist;
import com.wrapper.spotify.model_objects.specification.Paging;
import com.wrapper.spotify.requests.data.search.simplified.SearchAlbumsRequest;
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
    // 앨범 초기 검색어
    private static String searchAlbumKey = "";
    // api access setting
    private static SpotifyApi spotifyApi = new SpotifyApi.Builder().setAccessToken(CreateToken.accesstoken()).build();
    private static SearchArtistsRequest searchArtistsRequest = spotifyApi.searchArtists(searchArtistKey).build();
    private static SearchAlbumsRequest searchAlbumsRequest = spotifyApi.searchAlbums(searchAlbumKey).build();
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
    // 아티스트 이름으로 검색
    // 그 아티스트의 앨범 반환
    public static String searchAlbums_Sync(String searchAlbumKey) {
        String result = "";
        searchAlbumsRequest = spotifyApi.searchAlbums(searchAlbumKey).build();
        try {
            final Paging<AlbumSimplified> albumPaging = searchAlbumsRequest.execute();
            result = Arrays.toString(albumPaging.getItems());
        } catch (SpotifyWebApiException| ParseException | IOException e) {
            throw new RuntimeException(e);
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(searchAlbums_Sync("에스파"));
    }
}
