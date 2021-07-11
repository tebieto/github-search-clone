import React from 'react';
import CustomButton from '../../components/CustomButton';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <CustomButton onClick={() => alert('clicked')}>
        Login to Github
      </CustomButton>
    </LoginContainer>
  );
};

export default Login;
