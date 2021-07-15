import React from 'react';
import { PaginationContainer } from './styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { getPageButtons } from '../../utils';
interface PaginationProps {
  itemsLength: number;
  currentPage: number;
  maxItemPerPage: number;
  setCurrentPage: { (page: number): void };
}
const Pagination = ({
  itemsLength,
  maxItemPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps): JSX.Element | null => {
  const maxButtonLength = 4;
  const buttonLength = Math.ceil(itemsLength / maxItemPerPage);
  const pageButtons = getPageButtons({
    buttonLength,
    maxButtonLength,
    currentPage,
  });
  const activatePrevious = currentPage > 0;
  const activateNext = currentPage < buttonLength - 1;
  return itemsLength ? (
    <PaginationContainer>
      <KeyboardArrowLeftIcon
        onClick={() => activatePrevious && setCurrentPage(currentPage - 1)}
        className={`icon arrow-left ${activatePrevious && 'active-icon'}`}
      />
      <div className="pages">
        {currentPage > 0 + maxButtonLength - 1 ? (
          <div className="prefix">
            <div onClick={() => setCurrentPage(0)} className="page">
              {1}
            </div>
            <div className="page">...</div>
          </div>
        ) : null}
        {pageButtons.map((page: number) => {
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
        {pageButtons[pageButtons.length - 1] !== buttonLength - 1 ? (
          <div className="suffix">
            <div className="page">...</div>
            <div
              onClick={() => setCurrentPage(buttonLength - 1)}
              className="page"
            >
              {buttonLength}
            </div>
          </div>
        ) : null}
      </div>
      <KeyboardArrowRightIcon
        onClick={() => activateNext && setCurrentPage(currentPage + 1)}
        className={`icon arrow-right ${activateNext && 'active-icon'}`}
      />
    </PaginationContainer>
  ) : null;
};

export default Pagination;
