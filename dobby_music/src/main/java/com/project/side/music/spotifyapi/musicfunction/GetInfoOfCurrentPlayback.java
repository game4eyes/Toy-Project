package com.project.side.music.spotifyapi.musicfunction;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.miscellaneous.CurrentlyPlayingContext;
import com.wrapper.spotify.requests.data.player.GetInformationAboutUsersCurrentPlaybackRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;

// 현재 재생목록에 대한 정보 가져오기
public class GetInfoOfCurrentPlayback {
    private static final String accessToken = "토큰값으로 변경예정";

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();
    private static final GetInformationAboutUsersCurrentPlaybackRequest getInformationAboutUsersCurrentPlaybackRequest =
            spotifyApi.getInformationAboutUsersCurrentPlayback()
//                  .market(CountryCode.SE)
//                  .additionalTypes("track,episode")
                    .build();

    public static void getInformationAboutUsersCurrentPlayback_Sync() {
        try {
            final CurrentlyPlayingContext currentlyPlayingContext = getInformationAboutUsersCurrentPlaybackRequest.execute();

            System.out.println("Timestamp: " + currentlyPlayingContext.getTimestamp());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void getInformationAboutUsersCurrentPlayback_Async() {
        try {
            final CompletableFuture<CurrentlyPlayingContext> currentlyPlayingContextFuture = getInformationAboutUsersCurrentPlaybackRequest.executeAsync();

            // Thread free to do other tasks...

            // Example Only. Never block in production code.
            final CurrentlyPlayingContext currentlyPlayingContext = currentlyPlayingContextFuture.join();

            System.out.println("Timestamp: " + currentlyPlayingContext.getTimestamp());
        } catch (CompletionException e) {
            System.out.println("Error: " + e.getCause().getMessage());
        } catch (CancellationException e) {
            System.out.println("Async operation cancelled.");
        }
    }

    public static void main(String[] args) {
        getInformationAboutUsersCurrentPlayback_Sync();
        getInformationAboutUsersCurrentPlayback_Async();
    }
}
