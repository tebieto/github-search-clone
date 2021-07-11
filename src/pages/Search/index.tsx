import React from 'react';
import HeaderProfileSection from '../../components/HeaderProfileSection';
import { SearchContainer } from './styles';

const Search = (): JSX.Element => {
  return (
    <SearchContainer>
      <div className="search-header">
        <HeaderProfileSection />
      </div>
    </SearchContainer>
  );
};

export default Search;
