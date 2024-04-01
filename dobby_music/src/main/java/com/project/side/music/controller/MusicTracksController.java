package com.project.side.music.controller;

import com.project.side.music.dto.TrackDetailsDTO;
import com.project.side.music.service.TrackService;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/Tracks")
public class MusicTracksController {

    @GetMapping("/{trackId}")
    public TrackDetailsDTO getTrackDetails(@PathVariable("trackId") String id) {
        if(TrackService.getTrack_Sync(id) != null) {
            return TrackService.getTrack_Sync(id);
        }
        System.out.println("널값 나옴");
        return null;
    }
}
