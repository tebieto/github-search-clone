export const queryLink = (query: string): string => {
  return `/search/results/?q=${query}`;
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
