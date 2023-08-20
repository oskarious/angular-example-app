import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.scss'],
})
export class NavbarLinkComponent {
  @Input()
  route!: string;
}
