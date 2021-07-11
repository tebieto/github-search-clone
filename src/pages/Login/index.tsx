import React from 'react';
import CustomButton from '../../components/CustomButton';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <CustomButton
        aria-label="Login to Github Button"
        onClick={() => alert('clicked')}
      >
        Login to Github
      </CustomButton>
    </LoginContainer>
  );
};

export default Login;
