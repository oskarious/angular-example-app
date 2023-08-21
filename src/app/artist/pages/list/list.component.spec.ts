import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists/artists.service';
import { FilterComponent } from '../../components/filter/filter.component';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of([]));

    let artistsService = new ArtistsService(httpClientSpy);
    TestBed.configureTestingModule({
      declarations: [ListComponent, FilterComponent],
      providers: [{ provide: ArtistsService, useValue: artistsService }],
      imports: [ReactiveFormsModule, FormsModule],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
