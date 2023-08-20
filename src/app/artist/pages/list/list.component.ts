import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { Artist } from 'src/types/artist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  artists$: Observable<Artist[]> = new Observable<Artist[]>();
  constructor(private artistsService: ArtistsService) {}
  ngOnInit(): void {
    this.artists$ = this.artistsService.getArtistList(false);
  }
}
