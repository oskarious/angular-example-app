import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { PricePipe } from '../../pipes/price.pipe';
import { TagComponent } from '../tag/tag.component';
import { ListCardComponent } from './list-card.component';

describe('ListCardComponent', () => {
  const activatedRouteStub = {
    snapshot: {
      data: {},
    },
  } as ActivatedRoute;

  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardComponent, PricePipe, TagComponent],
      imports: [RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    });
    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
    component.artist = {
      id: 1,
      name: 'name',
      picture: '',
      price: 1,
      tags: [{ group: 1, id: 1, name: 'tag' }],
      video: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
