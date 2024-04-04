package com.project.side.music.spotifyapi.musicplayer;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.SetRepeatModeOnUsersPlaybackRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;

public class SetRepeatModeOnPlayback {
    private static final String accessToken = "토큰값으로 변경예정";
    private static final String state = "track";

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();
    private static final SetRepeatModeOnUsersPlaybackRequest setRepeatModeOnUsersPlaybackRequest = spotifyApi
            .setRepeatModeOnUsersPlayback(state)
//          .device_id("5fbb3ba6aa454b5534c4ba43a8c7e8e45a63ad0e")
            .build();

    public static void setRepeatModeOnUsersPlayback_Sync() {
        try {
            final String string = setRepeatModeOnUsersPlaybackRequest.execute();

            System.out.println("Null: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void setRepeatModeOnUsersPlayback_Async() {
        try {
            final CompletableFuture<String> stringFuture = setRepeatModeOnUsersPlaybackRequest.executeAsync();

            // Thread free to do other tasks...

            // Example Only. Never block in production code.
            final String string = stringFuture.join();

            System.out.println("Null: " + string);
        } catch (CompletionException e) {
            System.out.println("Error: " + e.getCause().getMessage());
        } catch (CancellationException e) {
            System.out.println("Async operation cancelled.");
        }
    }

    public static void main(String[] args) {
        setRepeatModeOnUsersPlayback_Sync();
        setRepeatModeOnUsersPlayback_Async();
    }
}
