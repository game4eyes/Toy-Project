package com.project.side.music.controller;

import com.project.side.music.service.TrackService;
import com.wrapper.spotify.model_objects.specification.Track;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MusicController {
    @GetMapping("/api/Tracks/{name}/{num}")
    public Track[] searchTracksAllResult(@PathVariable("name") String name, @PathVariable("num") Integer num) {
        return TrackService.searchTrack_Sync(name,num);
    }
}
