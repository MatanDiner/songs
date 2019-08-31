import { Component, OnInit,Input} from '@angular/core';
import {Iquote} from "../../../models/Iquote.model";
import {SongsService} from "../../../services/songs.service";
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes:Iquote;
  constructor(private songsService:SongsService) { }

  ngOnInit() {
  }

  onSelectedQoute(index){
    this.songsService.offsetSelectedEvent.next(index);
  }

}
