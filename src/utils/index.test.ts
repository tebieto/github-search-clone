import {
  addCommaToNumber,
  getPageTitle,
  shortenNumber,
  getPageButtons,
  queryLink,
} from '.';
import colors from './colors';
import { PAGES } from './constants';

describe('shortenNumber()', () => {
  it('should return a string representing shortened number', () => {
    const string1 = shortenNumber(1000).toLowerCase();
    const string2 = shortenNumber(10500).toLowerCase();
    expect(string1).toBe('1k');
    expect(string2).toBe('10.5k');
  });
});

describe('addCommaToNumber()', () => {
  it('should return a string representing comma seperated numbers', () => {
    const string1 = addCommaToNumber(1000).toLowerCase();
    const string2 = addCommaToNumber(10500).toLowerCase();
    expect(string1).toBe('1,000');
    expect(string2).toBe('10,500');
  });
});

describe('getPageTitle()', () => {
  it('should appended inputed string to existing strings', () => {
    const string1 = getPageTitle('Test');
    expect(string1).toBe('Github Search | Test');
  });
});

describe('queryLink()', () => {
  it('should appended inputed string to existing strings', () => {
    const string1 = queryLink('Test');
    expect(string1).toBe(`${PAGES.results}?q=Test`);
  });
});

describe('getPageButtons()', () => {
  const pageButtons = getPageButtons({
    buttonLength: 10,
    maxButtonLength: 7,
    currentPage: 0,
  });
  const pageButtons1 = getPageButtons({
    buttonLength: 20,
    maxButtonLength: 5,
    currentPage: 7,
  });
  it('should return an array of length <= maxButtonLength', () => {
    expect(pageButtons.length).toBeLessThanOrEqual(7);
    expect(pageButtons1.length).toBeLessThanOrEqual(5);
  });

  it('should return an array with predictable last item', () => {
    expect(pageButtons[pageButtons.length - 1]).toEqual(6);
    expect(pageButtons1[pageButtons1.length - 1]).toEqual(9);
  });

  it('should return an array with predictable first item', () => {
    expect(pageButtons[0]).toEqual(0);
    expect(pageButtons1[0]).toEqual(5);
  });
});

describe('colors', () => {
  it('should be an onbject', () => {
    expect(colors).toBeInstanceOf(Object);
  });
  it('should have primaryColor value of #000000', () => {
    expect(colors.primaryColor).toBe('#000000');
  });
  it('should have secondaryColor value of #ffffff', () => {
    expect(colors.secondaryColor).toBe('#ffffff');
  });
  it('should have primaryButtonColor value of #5c5c5c', () => {
    expect(colors.primaryButtonColor).toBe('#5c5c5c');
  });
  it('should have primaryButtonTextColor value of #ffffff', () => {
    expect(colors.primaryButtonTextColor).toBe('#ffffff');
  });
  it('should have resultPageBackgroundColor value of #fafbfc', () => {
    expect(colors.resultPageBackgroundColor).toBe('#fafbfc');
  });
});
