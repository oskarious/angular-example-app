import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of([]));

    let artistsService = new ArtistsService(httpClientSpy);
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: ArtistsService, useValue: artistsService }],
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
