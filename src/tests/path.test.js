import countryToPath from '../components/path';

describe('countryToPath function', () => {
  it('removes whitespaces in between', () => {
    const result = countryToPath(
      'a     b c     de    f',
    );
    expect(result).toBe('abcdef');
  });

  it('changes uppercase letters to lowercase letters', () => {
    const result = countryToPath('TRUE');
    expect(result).toBe('true');
  });

  it('removes parenthesis', () => {
    const result = countryToPath('((TRUE))');
    expect(result).toBe('true');
  });
});
