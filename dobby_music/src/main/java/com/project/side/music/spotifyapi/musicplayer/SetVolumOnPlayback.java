package com.project.side.music.spotifyapi.musicplayer;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.SetVolumeForUsersPlaybackRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;

public class SetVolumOnPlayback {
    private static final String accessToken = "토큰 값 교체 예정";
    private static final int volumePercent = 100;

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();
    private static final SetVolumeForUsersPlaybackRequest setVolumeForUsersPlaybackRequest = spotifyApi
            .setVolumeForUsersPlayback(volumePercent)
//          .device_id("5fbb3ba6aa454b5534c4ba43a8c7e8e45a63ad0e")
            .build();

    public static void setVolumeForUsersPlayback_Sync() {
        try {
            final String string = setVolumeForUsersPlaybackRequest.execute();

            System.out.println("Null: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void setVolumeForUsersPlayback_Async() {
        try {
            final CompletableFuture<String> stringFuture = setVolumeForUsersPlaybackRequest.executeAsync();

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
        setVolumeForUsersPlayback_Sync();
        setVolumeForUsersPlayback_Async();
    }
}
