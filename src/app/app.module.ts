import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchSongComponent } from './components/search-song/search-song.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchListComponent } from './components/search-song/search-list/search-list.component';
import { SongVideoComponent } from './components/song-video/song-video.component';
import { VideoComponent } from './components/song-video/video/video.component';
import { QuotesComponent } from './components/song-video/quotes/quotes.component';
import {SrcPipe} from './pipes/src.pipe';
import {MinuteSecondsPipe} from './pipes/minSec.pip';
@NgModule({
  declarations: [
    AppComponent,
    SearchSongComponent,
    HeaderComponent,
    SearchListComponent,
    SongVideoComponent,
    VideoComponent,
    QuotesComponent,
    SrcPipe,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
