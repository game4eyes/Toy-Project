package com.project.side.music.controller;


import com.project.side.music.dto.ArtistDetailsDTO;
import com.project.side.music.dto.TrackDetailsDTO;
import com.project.side.music.service.ArtistService;
import com.project.side.music.service.TrackRecommendationsService;
import com.project.side.music.service.TrackService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174")
public class MusicApiController {
    private final ArtistService artistService;
    private final TrackService trackService;
    private final TrackRecommendationsService trackRecommendationsService;
    @GetMapping("/Artist/{artistId}")
    public ArtistDetailsDTO getArtistDetails(@PathVariable("artistId") String id) {
        ArtistDetailsDTO artistDetailsDTO = artistService.getArtist_Sync(id);
        if(artistDetailsDTO != null) {
            System.out.println("Artist details found.");
            return artistDetailsDTO;
        } else {
            System.out.println("Artist details not found.");
            // 적절한 예외 처리 또는 상태 코드 반환
            return null;
        }
    }

    @GetMapping("/Tracks/{trackId}")
    public TrackDetailsDTO getTrackDetails(@PathVariable("trackId") String id) {
        TrackDetailsDTO trackDetails = trackService.getTrack_Sync(id);
        if(trackDetails != null) {
            System.out.println("Track details found.");
            return trackDetails;
        } else {
            System.out.println("Track details not found.");
            // 적절한 예외 처리 또는 상태 코드 반환
            return null;
        }
    }

    @GetMapping("/Recommendation/{artistId}/{trackId}/{limite}")
    public ArrayList<TrackDetailsDTO> getTrackRecommendation(
            @PathVariable("artistId") String artistId,
            @PathVariable("trackId") String trackId,
            @PathVariable("limite") int limite) {
        ArrayList<TrackDetailsDTO> result = trackRecommendationsService.getRecommendations_Sync(artistId,trackId,limite);
        if(result != null) {
            System.out.println("Recommend found.");
            return result;
        } else {
            System.out.println("Recommend not found.");
            // 적절한 예외 처리 또는 상태 코드 반환
            return null;
        }
    }
}
