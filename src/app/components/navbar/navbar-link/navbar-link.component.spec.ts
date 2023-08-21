import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarLinkComponent } from './navbar-link.component';

describe('NavbarLinkComponent', () => {
  let component: NavbarLinkComponent;
  let fixture: ComponentFixture<NavbarLinkComponent>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: {
        data: {},
      },
    } as ActivatedRoute;
    TestBed.configureTestingModule({
      declarations: [NavbarLinkComponent],
      imports: [RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    });
    fixture = TestBed.createComponent(NavbarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
