package com.project.side.music.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class ArtistDetailsDTO {
    private String artistId;
    private Integer artistFollow;
    private ArrayList<String> artist_genres;
    private String artistImg640;
    private String artistImg300;
    private String artistImg64;
    private String artistName;
    private Integer artistPopularity;
}
