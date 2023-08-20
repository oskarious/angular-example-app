import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtubeUrl',
})
export class YoutubeUrlPipe implements PipeTransform {
  /**
   * Replaces the watch part of a youtube url with embed, otherwise the youtube iframe refuses to load the video
   */
  transform(value: string, ...args: unknown[]): string {
    return value.replace('watch?v=', 'embed/');
  }
}
