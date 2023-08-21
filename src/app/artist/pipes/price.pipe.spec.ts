import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  it('create an instance', () => {
    const pipe = new PricePipe();
    expect(pipe).toBeTruthy();
  });

  // Wow, I did not know the Intl formatter used a different kind of space character.
  // It uses a none breaking space " " (U+00A0) instead of a normal space " " (U+0020)
  it('should format 10k to 10 000 (SEK)', () => {
    const pipe = new PricePipe();
    const result = pipe.transform(10000);
    expect(result).toBe('10 000');
  });

  it('should format 100 000k to 100 000 000 (SEK)', () => {
    const pipe = new PricePipe();
    const result = pipe.transform(100000000);
    expect(result).toBe('100 000 000');
  });

  it('should format 50 to 50 (SEK)', () => {
    const pipe = new PricePipe();
    const result = pipe.transform(50);
    expect(result).toBe('50');
  });
});
