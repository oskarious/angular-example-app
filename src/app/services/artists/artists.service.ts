import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, first } from 'rxjs';
import { Artist } from 'src/types/artist';
import { Filter } from 'src/types/filter';
import { Tag } from 'src/types/tag';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  // FIXME: Should be provided via a config file/env variable
  API_BASE_URL = 'https://code-sample-80ad0e180e81.herokuapp.com' as const;

  private currentFilter: Filter = {
    descending: false,
    tags: [],
  };
  private filterableTagsSubject: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);

  private artistList$: Observable<Artist[]> | undefined;

  private filteredArtistListSubject: BehaviorSubject<Artist[]> = new BehaviorSubject<Artist[]>([]);

  constructor(private http: HttpClient) {}

  private get<T>(url: string) {
    return this.http.get<T>(`${this.API_BASE_URL}${url}`).pipe(
      catchError((err) => {
        // TODO: Show a snackbar or something to let user know to retry later
        console.error(err);
        return [];
      }),
    );
  }

  private extractTagIdAndGroup(tag: Tag) {
    return { id: tag.id, group: tag.group };
  }

  private buildFilteredArtists() {
    if (this.artistList$) {
      // Filter by tags, then sort by our only sorting option, price
      this.artistList$.pipe(first()).subscribe((artists) => {
        console.log(artists);
        const filtered = artists
          .filter((artist) => {
            if (!this.currentFilter.tags.length) return true;

            // Ensure we are checking against both id and group, because different groups can have the same id.
            // Not ideal 😬
            const artistTags = artist.tags.map((t) => this.extractTagIdAndGroup(t));
            const currentFilterTags = this.currentFilter.tags.map((t) => this.extractTagIdAndGroup(t));

            return artistTags.some(
              (tag) =>
                currentFilterTags.map((t) => t.id).includes(tag.id) &&
                currentFilterTags.map((t) => t.group).includes(tag.group),
            );
          })
          .sort((a, b) => {
            return this.currentFilter.descending ? b.price - a.price : a.price - b.price;
          });

        this.filteredArtistListSubject.next(filtered);
      });
    }
  }

  getArtistList(fresh: boolean): Observable<Artist[]> {
    if (!this.artistList$ || fresh) {
      this.artistList$ = this.get<Artist[]>('/artists/list');

      this.artistList$.pipe(first()).subscribe((artists) => {
        // Get unique list of tags
        const tags: Tag[] = [];
        for (const artist of artists) {
          for (const tag of artist.tags) {
            if (!tags.some((t) => t.id === tag.id)) {
              tags.push(tag);
            }
          }
        }
        this.filterableTagsSubject.next(tags);
      });

      this.buildFilteredArtists();
    }

    return this.filteredArtistListSubject;
  }

  getCurrentFilter(): Filter {
    return this.currentFilter;
  }

  setArtistFilter(filter: Filter) {
    this.currentFilter = filter;
    this.buildFilteredArtists();
  }

  getFilterableTags(): Observable<Tag[]> {
    return this.filterableTagsSubject;
  }
}
