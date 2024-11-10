import { EllipsisTextPipe } from './ellipsis-text.pipe';

describe('EllipsisTextPipe', () => {
  let pipe: EllipsisTextPipe;

  beforeEach(() => {
    pipe = new EllipsisTextPipe();
  });

  it('should return the original text if its length is within the limit', () => {
    const text = 'Short text';
    expect(pipe.transform(text, 15)).toBe('Short text');
  });

  it('should truncate the text and add ellipsis if its length exceeds the limit', () => {
    const text = 'This is a very long text that needs to be truncated';
    expect(pipe.transform(text, 15)).toBe('This is a ve...');
  });

  it('should return an empty string when text is undefined', () => {
    expect(pipe.transform(undefined, 15)).toBe('');
  });

  it('should default to a length of 15 if no length is provided', () => {
    const text = 'Another long text that will be truncated';
    expect(pipe.transform(text)).toBe('Another long...');
  });

  it('should handle very short text without truncation', () => {
    const text = 'Hello';
    expect(pipe.transform(text, 15)).toBe('Hello');
  });

  it('should handle exact length text without truncation', () => {
    const text = 'Exact length';
    expect(pipe.transform(text, 12)).toBe('Exact length');
  });
});
