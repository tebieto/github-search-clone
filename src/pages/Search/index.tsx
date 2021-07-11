import React from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import HeaderProfileSection from '../../components/HeaderProfileSection';
import Logo from '../../components/Logo';
import { SearchContainer } from './styles';

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
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
            />
          </div>
          <CustomButton
            aria-label="Search Github Button"
            onClick={() => alert('clicked')}
          >
            Search Github
          </CustomButton>
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
