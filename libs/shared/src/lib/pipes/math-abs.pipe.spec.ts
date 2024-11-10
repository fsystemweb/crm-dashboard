import { MathAbsPipe } from './math-abs.pipe';

describe('MathAbsPipe', () => {
  let pipe: MathAbsPipe;

  beforeEach(() => {
    pipe = new MathAbsPipe();
  });

  it('should return the absolute value for a positive number', () => {
    expect(pipe.transform(5)).toBe(5);
  });

  it('should return the absolute value for a negative number', () => {
    expect(pipe.transform(-5)).toBe(5);
  });

  it('should return 0 for a value of 0', () => {
    expect(pipe.transform(0)).toBe(0);
  });
});
