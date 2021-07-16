import React from 'react';
import { useHistory } from 'react-router';
import { queryLink } from '../../utils';
import CustomInput from '../CustomInput';
import HeaderProfileSection from '../HeaderProfileSection';
import Logo from '../Logo';
import { HeaderContainer, ToolbarContainer } from './styles';

const Header = ({ query }: { query: string }): JSX.Element => {
  const [inputValue, setInputValue] = React.useState('');

  const history = useHistory();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.key === 'Enter' && history.push(queryLink(inputValue));
    },
    [inputValue],
  );

  React.useEffect(() => {
    setInputValue(query);
  }, [query]);
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
            onKeyDown={handleKeyDown}
          />
        </div>
        <HeaderProfileSection />
      </ToolbarContainer>
    </HeaderContainer>
  );
};

export default Header;
