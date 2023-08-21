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

  private buildFilteredArtists() {
    if (this.artistList$) {
      // Filter by tags, then sort by our only sorting option, price
      this.artistList$.pipe(first()).subscribe((artists) => {
        const filtered = artists
          .filter((artist) => {
            if (!this.currentFilter.tags.length) return true;
            return artist.tags.some((tag) => this.currentFilter.tags.map((t) => t.id).includes(tag.id));
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
