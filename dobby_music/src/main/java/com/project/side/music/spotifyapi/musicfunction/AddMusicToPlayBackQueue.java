package com.project.side.music.spotifyapi.musicfunction;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.AddItemToUsersPlaybackQueueRequest;
import org.apache.hc.core5.http.ParseException;

import java.io.IOException;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;
// 재생목록에 노래를 추가하는 클래스
public class AddMusicToPlayBackQueue {
    // Spotify API에 액세스하기 위한 액세스 토큰
    private static final String accessToken = "나중에 토큰 불러오는 값 넣어야함";
    // 추가할 음악의 트랙 URI
    private static final String trackUri = "spotify:track: TrackId" ; // TrackId가 어디서 온건지 명시되어 있지 않아서 수정이 필요합니다.

    // Spotify API 인스턴스 생성
    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setAccessToken(accessToken)
            .build();
    // 사용자의 재생 대기열에 음악을 추가하는 요청 생성
    private static final AddItemToUsersPlaybackQueueRequest addItemToUsersPlaybackQueueRequest = spotifyApi
            .addItemToUsersPlaybackQueue(trackUri)
//    .device_id("5fbb3ba6aa454b5534c4ba43a8c7e8e45a63ad0e") // 특정 디바이스에 음악을 추가하는 경우에만 사용합니다.
            .build();

    // 동기적으로 사용자의 재생 대기열에 음악을 추가하는 메서드
    public static void addItemToUsersPlaybackQueue_Sync() {
        try {
            // 동기적으로 요청 실행하고 결과 문자열을 받음
            final String string = addItemToUsersPlaybackQueueRequest.execute();

            // 결과 출력
            System.out.println("Null: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            // 에러 처리
            System.out.println("Error: " + e.getMessage());
        }
    }

    // 비동기적으로 사용자의 재생 대기열에 음악을 추가하는 메서드
    public static void addItemToUsersPlaybackQueue_Async() {
        try {
            // 비동기적으로 요청 실행하고 CompletableFuture 반환
            final CompletableFuture<String> stringFuture = addItemToUsersPlaybackQueueRequest.executeAsync();

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
        // 동기적으로 사용자의 재생 대기열에 음악을 추가하는 메서드 호출
        addItemToUsersPlaybackQueue_Sync();
        // 비동기적으로 사용자의 재생 대기열에 음악을 추가하는 메서드 호출
        addItemToUsersPlaybackQueue_Async();
    }
}
