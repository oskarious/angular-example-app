import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { Filter } from 'src/types/filter';
import { Tag } from 'src/types/tag';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filter: Filter = { tags: [], descending: false };
  filterableTags$: Observable<Tag[]> = new Observable<Tag[]>();

  // Keep a "normal" array around to make it easier to work with
  private filterableTags: Tag[] = [];

  filterGroup = new FormGroup({
    tags: new FormGroup({}),
    descending: new FormControl(false),
  });

  get tagsGroup() {
    return this.filterGroup.get('tags') as FormGroup;
  }

  constructor(private artistSerivce: ArtistsService) {}

  ngOnInit(): void {
    this.filterableTags$ = this.artistSerivce.getFilterableTags();
    this.filterableTags$
      .pipe(
        tap((tags) => {
          this.filterableTags = tags;
        }),
      )
      .subscribe((tags) => {
        for (const tag of tags) {
          this.tagsGroup.addControl(tag.id.toString(), new FormControl(false));
        }
      });

    this.tagsGroup.valueChanges.subscribe((value) => {
      const toFilterOn = this.filterableTags.filter((t) => value[t.id.toString()]);
      this.filter.tags = toFilterOn;
      this.doFilter();
    });

    this.filterGroup.get('descending')!.valueChanges.subscribe((v) => {
      this.filter.descending = v || false;
      this.doFilter();
    });

    this.filter = this.artistSerivce.getCurrentFilter();
  }

  getTagControl(tag: Tag): FormControl {
    return this.tagsGroup.get(tag.name) as FormControl;
  }

  // If this was doing network calls, I would add a debouncer here
  // in the form of a method decorator
  private doFilter() {
    this.artistSerivce.setArtistFilter(this.filter);
  }
}
