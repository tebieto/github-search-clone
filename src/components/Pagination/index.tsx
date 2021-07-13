import React from 'react';
import { getPages } from '../../utils';
import { PaginationContainer } from './styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
interface PaginationProps {
  itemsLength: number;
  currentPage: number;
  max: number;
  setCurrentPage: { (page: number): void };
}
const Pagination = ({
  itemsLength,
  max,
  currentPage,
  setCurrentPage,
}: PaginationProps): JSX.Element => {
  const pages = getPages(Math.ceil(itemsLength / max));
  const activatePrevious = currentPage > 0;
  const activateNext = currentPage < pages.length - 1;
  return (
    <PaginationContainer>
      <KeyboardArrowLeftIcon
        onClick={() => activatePrevious && setCurrentPage(currentPage - 1)}
        className={`icon arrow-left ${activatePrevious && 'active-icon'}`}
      />
      <div className="pages">
        {pages.map((page: number) => {
          return (
            <div
              onClick={() => setCurrentPage(page)}
              className={`page ${page === currentPage && 'active'}`}
              key={page}
            >
              {page + 1}
            </div>
          );
        })}
      </div>
      <KeyboardArrowRightIcon
        onClick={() => activateNext && setCurrentPage(currentPage + 1)}
        className={`icon arrow-right ${activateNext && 'active-icon'}`}
      />
    </PaginationContainer>
  );
};

export default Pagination;
