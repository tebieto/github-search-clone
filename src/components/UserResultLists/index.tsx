import { useQuery } from '@apollo/client';
import React from 'react';
import { SEARCH_USER } from '../../graphql/mutation';
import { UserResultListsContainer } from './styles';

interface UserResultListsProps {
  query: string;
}
const UserResultLists = ({ query }: UserResultListsProps): JSX.Element => {
  const { data, error, loading } = useQuery(SEARCH_USER, {
    variables: { query },
  });

  console.log({ data, error, loading });
  return (
    <UserResultListsContainer>
      <h2>543 Users</h2>
      <div className="user-result-list">
        <div className="title">
          <h4 className="main-title">John Doe</h4>
          <div className="sub-title">Lorem Ipsum Dollor</div>
        </div>
        <div className="description">Some longer text to fill some space</div>
      </div>
    </UserResultListsContainer>
  );
};

export default UserResultLists;
