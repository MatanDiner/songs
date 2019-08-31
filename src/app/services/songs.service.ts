import { Injectable } from '@angular/core';
import {Isong} from "../models/Isong.model";
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SongsService {
  url:string;
  songs:Isong[]
  constructor() {
    this.url = "https://songs-w.firebaseio.com/songs.json";
    this.songs = [];
   }

  songSelectedEvent = new Subject<Isong>(); 
  offsetSelectedEvent = new Subject<number>(); 

  async getSongs():Promise<Isong[]>{

    const response = await fetch(this.url);
    const data = await response.json();
    this.songs = data;
    return data;
  }


  searchSongs(searchValue){
    return this.songs.filter(song=>song.title.toLowerCase().includes(searchValue.toLowerCase()));
  }


}

