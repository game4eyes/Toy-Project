package com.project.side.music.spotifyapi.musicplayer;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.ToggleShuffleForUsersPlaybackRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;

public class SetShuffleModeOnPlayback {
    private static final String accessToken = "taHZ2SdB-bPA3FsK3D7ZN5npZS47cMy-IEySVEGttOhXmqaVAIo0ESvTCLjLBifhHOHOIuhFUKPW1WMDP7w6dj3MAZdWT8CLI2MkZaXbYLTeoDvXesf2eeiLYPBGdx8tIwQJKgV8XdnzH_DONk";
    private static final boolean state = true;

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();
    private static final ToggleShuffleForUsersPlaybackRequest toggleShuffleForUsersPlaybackRequest = spotifyApi
            .toggleShuffleForUsersPlayback(state)
//          .device_id("5fbb3ba6aa454b5534c4ba43a8c7e8e45a63ad0e")
            .build();

    public static void toggleShuffleForUsersPlayback_Sync() {
        try {
            final String string = toggleShuffleForUsersPlaybackRequest.execute();

            System.out.println("Null: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void toggleShuffleForUsersPlayback_Async() {
        try {
            final CompletableFuture<String> stringFuture = toggleShuffleForUsersPlaybackRequest.executeAsync();

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
        toggleShuffleForUsersPlayback_Sync();
        toggleShuffleForUsersPlayback_Async();
    }
}
