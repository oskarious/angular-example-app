import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArtistRoutingModule } from './artist-routing.module';
import { ListCardComponent } from './components/list-card/list-card.component';
import { ListComponent } from './pages/list/list.component';
import { TagComponent } from './components/tag/tag.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { YoutubeUrlPipe } from './pipes/youtube-url.pipe';

@NgModule({
  declarations: [ListComponent, ListCardComponent, TagComponent, VideoPlayerComponent, YoutubeUrlPipe],
  imports: [CommonModule, ArtistRoutingModule],
})
export class ArtistModule {}
