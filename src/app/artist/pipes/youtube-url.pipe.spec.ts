import { YoutubeUrlPipe } from './youtube-url.pipe';

describe('YoutubeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new YoutubeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
