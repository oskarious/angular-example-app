import { Component, Input } from '@angular/core';
import { Tag } from 'src/types/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input()
  tag!: Tag;
}
