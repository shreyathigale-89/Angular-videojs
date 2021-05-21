import { AfterViewInit, Component } from '@angular/core';
import 'youtube-video-js';
import videojs from 'video.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public player: videojs.Player;

  constructor() { }

  ngAfterViewInit() {
    const options = {
      loop: true,
      controls: true,
      height: 400,
      width: 600,
      playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5],
      userActions: {
        hotkeys: true
      }
    };
    this.player = videojs('my-video', options);
    this.player = videojs('my-video1', options);
    this.player = videojs('my-video2', options);
  
  


  }

}

