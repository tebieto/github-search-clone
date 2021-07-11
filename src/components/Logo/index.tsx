import React from 'react';
import AppLogoMark from '../../assets/github-mark.png';
import AppLogo from '../../assets/github-logo.png';
import { LogoContainer } from './styles';

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <img className="logo-mark" src={AppLogoMark} alt="" />
      <img className="logo" src={AppLogo} alt="" />
    </LogoContainer>
  );
};

export default Logo;
