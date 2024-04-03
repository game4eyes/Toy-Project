package com.project.side.music.spotifyapi.musicplayer;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.PauseUsersPlaybackRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;

public class PausePlayback {
    // Spotify API에 접근하기 위한 액세스 토큰
    private static final String accessToken = "taHZ2SdB-bPA3FsK3D7ZN5npZS47cMy-IEySVEGttOhXmqaVAIo0ESvTCLjLBifhHOHOIuhFUKPW1WMDP7w6dj3MAZdWT8CLI2MkZaXbYLTeoDvXesf2eeiLYPBGdx8tIwQJKgV8XdnzH_DONk";

    // Spotify API 인스턴스 생성
    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();

    // 음악 재생 일시 중지 요청 생성
    private static final PauseUsersPlaybackRequest pauseUsersPlaybackRequest = spotifyApi.pauseUsersPlayback()
//          .device_id("5fbb3ba6aa454b5534c4ba43a8c7e8e45a63ad0e") // 특정 디바이스에서 재생을 일시 중지하는 경우에만 사용
            .build();

    // 동기적으로 음악 재생 일시 중지
    public static void pauseUsersPlayback_Sync() {
        try {
            // 동기적으로 요청 실행하고 결과 문자열을 받음
            final String string = pauseUsersPlaybackRequest.execute();

            // 결과 출력
            System.out.println("Null: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) { // ParseException 제거
            // 에러 처리
            System.out.println("Error: " + e.getMessage());
        }
    }

    // 비동기적으로 음악 재생 일시 중지
    public static void pauseUsersPlayback_Async() {
        try {
            // 비동기적으로 요청 실행하고 CompletableFuture 반환
            final CompletableFuture<String> stringFuture = pauseUsersPlaybackRequest.executeAsync();

            // 다른 작업 수행 가능한 스레드...

            // CompletableFuture의 결과를 얻어와서 출력
            final String string = stringFuture.join();

            // 결과 출력
            System.out.println("Null: " + string);
        } catch (CompletionException e) {
            // CompletableFuture 실행 중 에러 발생 시 처리
            System.out.println("Error: " + e.getCause().getMessage());
        } catch (CancellationException e) {
            // 비동기 작업 취소 시 처리
            System.out.println("Async operation cancelled.");
        }
    }

    // 메인 메서드
    public static void main(String[] args) {
        // 동기적 음악 재생 일시 중지 메서드 호출
        pauseUsersPlayback_Sync();

        // 비동기적 음악 재생 일시 중지 메서드 호출
        pauseUsersPlayback_Async();
    }
}
