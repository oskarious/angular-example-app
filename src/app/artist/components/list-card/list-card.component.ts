import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Artist } from 'src/types/artist';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {
  @ViewChild('videoModal')
  videoModal!: ElementRef<HTMLDialogElement>;

  @Input()
  artist!: Artist;

  previewVideo(ev: Event) {
    // Prevent us navigating via the card's link
    ev.preventDefault();
    ev.stopPropagation();
    this.videoModal.nativeElement.showModal();
  }
}
