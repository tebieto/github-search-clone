import React from 'react';
import { HeaderProfileSectionContainer } from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import avatar from '../../assets/user.png';

const HeaderProfileSection = (): JSX.Element => {
  return (
    <HeaderProfileSectionContainer>
      <img className="auth-user-avatar" src={avatar} alt="" />
      <span className="auth-user-name">John Doe</span>
      <ExpandMoreIcon className="icon" />
    </HeaderProfileSectionContainer>
  );
};

export default HeaderProfileSection;
