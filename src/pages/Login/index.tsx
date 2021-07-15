import React from 'react';
import GithubAuth from '../../components/GithubAuth';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <Title title={getPageTitle('Login')} />
      <GithubAuth />
    </LoginContainer>
  );
};

export default Login;
