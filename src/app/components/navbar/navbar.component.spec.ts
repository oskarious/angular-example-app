import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: {
        data: {},
      },
    } as ActivatedRoute;

    TestBed.configureTestingModule({
      declarations: [NavbarComponent, NavbarLinkComponent],
      imports: [RouterModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
