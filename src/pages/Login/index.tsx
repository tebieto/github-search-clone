import React from 'react';
import GithubAuth from '../../components/GithubAuth';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <GithubAuth />
    </LoginContainer>
  );
};

export default Login;
