package com.project.side.music.controller;


import com.project.side.music.dto.ArtistDetailsDTO;
import com.project.side.music.dto.TrackDetailsDTO;
import com.project.side.music.service.ArtistService;
import com.project.side.music.service.TrackService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174")
public class MusicApiController {
    private final ArtistService artistService;
    private final TrackService trackService;
    @GetMapping("/Artist/{artistId}")
    public ArtistDetailsDTO getArtistDetails(@PathVariable("artistId") String id) {
        ArtistDetailsDTO artistDetailsDTO = artistService.getArtist_Sync(id);
        if(artistDetailsDTO != null) {
            System.out.println("Track details found.");
            return artistDetailsDTO;
        } else {
            System.out.println("Track details not found.");
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
}
