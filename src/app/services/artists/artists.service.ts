import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/types/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  API_BASE_URL = 'https://code-sample-80ad0e180e81.herokuapp.com' as const;

  private artistList$: Observable<Artist[]> | undefined;

  constructor(private http: HttpClient) {}

  private get<T>(url: string) {
    return this.http.get<T>(`${this.API_BASE_URL}${url}`);
  }

  getArtistList(fresh: boolean) {
    if (!this.artistList$ || fresh) {
      this.artistList$ = this.get<Artist[]>('/artists/list');
    }

    return this.artistList$;
  }
}
