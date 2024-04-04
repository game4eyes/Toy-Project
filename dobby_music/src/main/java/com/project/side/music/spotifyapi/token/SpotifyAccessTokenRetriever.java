package com.project.side.music.spotifyapi.token;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

public class SpotifyAccessTokenRetriever {

    public String getAccessToken(String code, String redirectUri) {
        String clientId = "YOUR_CLIENT_ID";
        String clientSecret = "YOUR_CLIENT_SECRET";
        String tokenUrl = "https://accounts.spotify.com/api/token";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setBasicAuth(clientId, clientSecret);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("code", code);
        body.add("redirect_uri", redirectUri);

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<String> responseEntity = restTemplate.exchange(tokenUrl, HttpMethod.POST, requestEntity, String.class);

        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            // Spotify로부터 받은 응답에서 액세스 토큰 추출
            String responseBody = responseEntity.getBody();
            // 여기서 응답을 파싱하여 액세스 토큰을 추출하고 반환
            return parseAccessToken(responseBody);
        } else {
            // 요청이 실패한 경우에 대한 처리
            return null;
        }
    }

    private String parseAccessToken(String responseBody) {
        // 응답을 파싱하여 액세스 토큰을 추출하는 코드를 작성
        // 예시: JSON 형식의 응답에서 "access_token" 필드의 값을 추출
        // 이 부분은 실제로 사용하는 형식에 따라 달라질 수 있습니다.
        return null;
    }
}