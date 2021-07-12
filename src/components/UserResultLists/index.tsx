import React from 'react';
import { UserResultListsContainer } from './styles';

const UserResultLists = (): JSX.Element => {
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
