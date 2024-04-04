package com.project.side.music.spotifyapi.token;

import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.SpotifyHttpManager;
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;
import java.net.URI;
import java.util.concurrent.CompletableFuture;

public class LoginToken {
    private static final String clientId = "e859fab228364ba3a367aac5108e559a";
    private static final String clientSecret = "035149921592411eacc4b2bdfd7b6365";
    private static final URI redirectUri = SpotifyHttpManager.makeUri("http://localhost:9090/callback");

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setClientId(clientId)
            .setClientSecret(clientSecret)
            .setRedirectUri(redirectUri)
            .build();
    private static final AuthorizationCodeUriRequest authorizationCodeUriRequest = spotifyApi.authorizationCodeUri()
            .build();

    public static void authorizationCodeUri_Async() {
        // 비동기적으로 권한 코드 URI 요청 실행
        final CompletableFuture<URI> uriFuture = authorizationCodeUriRequest.executeAsync();

        // CompletableFuture를 사용하여 비동기적으로 결과 처리
        uriFuture.thenAccept(uri -> System.out.println("URI: " + uri.toString()))
                .exceptionally(e -> {
                    System.out.println("비동기 작업 중 오류 발생: " + e.getMessage());
                    return null;
                });
    }

    public static void main(String[] args) {
        // 비동기 방식으로 권한 코드 URI 요청 실행
        authorizationCodeUri_Async();

        // 메인 스레드가 너무 빨리 종료되지 않도록 대기
        try {
            Thread.sleep(1000); // 임시 대기 시간. 실제로는 적절한 종료 조건이 필요함
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
