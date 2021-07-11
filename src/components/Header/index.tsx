import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import HeaderProfileSection from '../HeaderProfileSection';
import Logo from '../Logo';
import { HeaderContainer, ToolbarContainer } from './styles';

const Header = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <HeaderContainer color="secondary" elevation={1} position="static">
      <ToolbarContainer>
        <Logo />
        <div className="search-input-container">
          <CustomInput
            value={inputValue}
            placeholder="Search"
            onChange={handleChange}
            size="small"
          />
        </div>
        <HeaderProfileSection />
      </ToolbarContainer>
    </HeaderContainer>
  );
};

export default Header;
