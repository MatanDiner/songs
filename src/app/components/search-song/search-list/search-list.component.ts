import { Component, OnInit ,Input} from '@angular/core';
import {SongsService} from '../../../services/songs.service';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() songs:string[];
  constructor(private songsService:SongsService) { }

  ngOnInit() {
    
  }

  onSongSelected(e){
    const title = e.target.innerText;
    const song = this.songsService.searchSongs(title);
    this.songsService.songSelectedEvent.next(song[0]);
  }

}
