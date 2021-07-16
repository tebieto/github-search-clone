import commaNumber from 'comma-number';
import shortNumber from 'short-number';
import { PAGES } from './constants';

export const queryLink = (query: string): string => {
  return `${PAGES.results}?q=${query}`;
};

interface GetPageButtonProps {
  buttonLength: number;
  maxButtonLength: number;
  currentPage: number;
}

export const getPageButtons = ({
  buttonLength,
  maxButtonLength,
  currentPage,
}: GetPageButtonProps): number[] => {
  let start = 0;
  while (currentPage > start + (maxButtonLength - 1)) {
    start += maxButtonLength;
  }

  const pages: number[] = [];
  while (buttonLength) {
    pages.push(pages.length);
    buttonLength--;
  }

  const pageButtons = pages.slice(start, start + maxButtonLength);

  return pageButtons;
};

export const getPageTitle = (title: string): string => {
  return `Github Search | ${title}`;
};

export const addCommaToNumber = (number: number): string => {
  return commaNumber(number);
};

export const shortenNumber = (number: number): string => {
  return shortNumber(number);
};

export const customScrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
