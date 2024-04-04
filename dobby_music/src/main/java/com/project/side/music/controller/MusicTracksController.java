package com.project.side.music.controller;

import com.project.side.music.dto.TrackDetailsDTO;
import com.project.side.music.service.TrackService;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/Tracks")
public class MusicTracksController {
    private final TrackService trackService;
    public MusicTracksController(TrackService trackService) {
        this.trackService = trackService;
    }
    @GetMapping("/{trackId}")
    public TrackDetailsDTO getTrackDetails(@PathVariable("trackId") String id) {
        TrackDetailsDTO trackDetails = trackService.getTrack_Sync(id);
        if(trackDetails != null) {
            System.out.println("Track details found.");
            System.out.println(trackDetails);
            return trackDetails;
        } else {
            System.out.println("Track details not found.");
            // 적절한 예외 처리 또는 상태 코드 반환
            return null;
        }
    }
}
