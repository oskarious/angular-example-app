import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistRoutingModule } from './artist-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { TagComponent } from './components/tag/tag.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ListComponent } from './pages/list/list.component';
import { PricePipe } from './pipes/price.pipe';
import { YoutubeUrlPipe } from './pipes/youtube-url.pipe';

@NgModule({
  declarations: [
    ListComponent,
    ListCardComponent,
    TagComponent,
    VideoPlayerComponent,
    YoutubeUrlPipe,
    PricePipe,
    FilterComponent,
  ],
  imports: [CommonModule, ArtistRoutingModule, ReactiveFormsModule, FormsModule],
})
export class ArtistModule {}
