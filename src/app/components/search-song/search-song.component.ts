import { Component, OnInit} from '@angular/core';
import {SongsService} from '../../services/songs.service';
import {Isong} from '../../models/Isong.model';
@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.component.html',
  styleUrls: ['./search-song.component.css']
})
export class SearchSongComponent implements OnInit {
  songs:Isong[]
  constructor(private songsService:SongsService) {
    this.songs = null;
   }

  async ngOnInit() {
    this.songs = await this.songsService.getSongs();
  }


  searchSong(e){
     this.songs = this.songsService.searchSongs(e.target.value); 
  }

}
