import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, catchError, first, map } from 'rxjs';
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
  private filterableTags$: Observable<Tag[]> = new Observable<Tag[]>();

  private artistList$: Observable<Artist[]> | undefined;

  private filteredSubscriber!: Subscriber<Artist[]>;
  private filteredArtistList$: Observable<Artist[]> = new Observable<Artist[]>((s) => {
    this.filteredSubscriber = s;
  });

  constructor(private http: HttpClient) {}

  private get<T>(url: string) {
    return this.http.get<T>(`${this.API_BASE_URL}${url}`).pipe(
      catchError((err) => {
        // TODO: Show a snackbar or something to let user know to retry later
        return [];
      }),
    );
  }

  private buildFilteredArtists() {
    if (this.artistList$) {
      // Filter by tag groups, then sort by our only sorting option, price
      this.artistList$.pipe(first()).subscribe((artists) => {
        const filtered = artists
          .filter((artist) => {
            if (!this.currentFilter.tags.length) return true;
            return artist.tags.some((tag) => this.currentFilter.tags.map((t) => t.id).includes(tag.id));
          })
          .sort((a, b) => {
            return this.currentFilter.descending ? b.price - a.price : a.price - b.price;
          });

        this.filteredSubscriber.next(filtered);
      });
    }
  }

  getArtistList(fresh: boolean): Observable<Artist[]> {
    if (!this.artistList$ || fresh) {
      this.artistList$ = this.get<Artist[]>('/artists/list').pipe();

      // Build our filterable options
      this.filterableTags$ = this.artistList$.pipe(
        map((artists) => {
          // Get unique list of tags
          const tags: Tag[] = [];
          for (const artist of artists) {
            for (const tag of artist.tags) {
              if (!tags.some((t) => t.id === tag.id)) {
                tags.push(tag);
              }
            }
          }
          return tags;
        }),
      );

      this.buildFilteredArtists();
    }

    return this.filteredArtistList$;
  }

  getCurrentFilter(): Filter {
    return this.currentFilter;
  }

  setArtistFilter(filter: Filter) {
    this.currentFilter = filter;
    this.buildFilteredArtists();
  }

  getFilterableTags(): Observable<Tag[]> {
    return this.filterableTags$;
  }
}
