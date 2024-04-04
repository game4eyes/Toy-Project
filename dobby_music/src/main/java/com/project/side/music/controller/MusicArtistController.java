package com.project.side.music.controller;


import com.project.side.music.dto.ArtistDetailsDTO;
import com.project.side.music.dto.TrackDetailsDTO;
import com.project.side.music.service.ArtistService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/Artist")
@RequiredArgsConstructor
public class MusicArtistController {
    private final ArtistService artistService;
    @GetMapping("/{artistId}")
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
}
