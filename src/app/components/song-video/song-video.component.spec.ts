import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongVideoComponent } from './song-video.component';

describe('SongVideoComponent', () => {
  let component: SongVideoComponent;
  let fixture: ComponentFixture<SongVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
