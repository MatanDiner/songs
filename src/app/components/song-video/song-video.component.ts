import { Component, OnInit } from '@angular/core';
import {SongsService} from "../../services/songs.service";
import {Isong} from "../../models/Isong.model";
@Component({
  selector: 'app-song-video',
  templateUrl: './song-video.component.html',
  styleUrls: ['./song-video.component.css']
})
export class SongVideoComponent implements OnInit {
  song:Isong;
  url:string;
  src:string;
  constructor(private songsService:SongsService) { 
    this.url = "https://www.youtube.com/embed/";
  }

  ngOnInit() {

    this.songsService.songSelectedEvent.subscribe(song=>{
        this.song = song;
        this.src = this.url + song.youtubeId + `?autoplay=1&start=${0}`; 
    })

    this.songsService.offsetSelectedEvent.subscribe(i=>{
      this.src = this.url + this.song.youtubeId + `?autoplay=1&start=${this.song.quotes[i].offset}`; 
    })
  }

   

}
