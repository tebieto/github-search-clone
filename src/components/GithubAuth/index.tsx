import React from 'react';
import GithubLogin from 'react-login-github';
import { GithubResponseProps } from '../../interface';
import { authenticateUser } from '../../rest/post';
import { ACCESS_TOKEN_KEY } from '../../utils/constants';
import { GithubAuthContainer } from './styles';

const GithubAuth = (): JSX.Element => {
  const onSuccess = (response: GithubResponseProps) => {
    authenticateUser(response.code)
      .then((res) => {
        return res.data.access_token;
      })
      .then((access_token) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
        window.location.reload();
      });
  };
  const onFailure = (response: unknown) => {
    console.error(response);
    alert('Error authenticating to github');
  };

  return (
    <GithubAuthContainer>
      <GithubLogin
        clientId="4f262cc9e20d3043da02"
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Login to Github"
        className="github-login-button"
      />
    </GithubAuthContainer>
  );
};

export default GithubAuth;
