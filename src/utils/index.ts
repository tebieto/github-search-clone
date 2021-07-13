export const queryLink = (query: string): string => {
  return `/search/results/?q=${query}`;
};

export const getPages = (count: number): number[] => {
  const pages: number[] = [];
  while (count) {
    pages.push(pages.length);
    count--;
  }
  return pages;
};
