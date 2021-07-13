import React from 'react';
import { useHistory } from 'react-router';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import HeaderProfileSection from '../../components/HeaderProfileSection';
import Logo from '../../components/Logo';
import { queryLink } from '../../utils';
import { SearchContainer } from './styles';

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('react');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const history = useHistory();

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.key === 'Enter' && history.push(queryLink(inputValue));
    },
    [inputValue],
  );

  return (
    <SearchContainer>
      <div className="search-header">
        <HeaderProfileSection />
      </div>
      <div className="search-body">
        <div className="search-body-contents">
          <Logo />
          <div className="search-input">
            <CustomInput
              aria-label="Search Input"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <CustomButton
            aria-label="Search Github Button"
            onClick={() => history.push(queryLink(inputValue))}
          >
            Search Github
          </CustomButton>
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
