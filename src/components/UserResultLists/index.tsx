import React from 'react';
import commaNumber from 'comma-number';
import { UserResultListsContainer } from './styles';
interface UserNode {
  id: string;
  name: string;
  bio: string;
  email: string;
}
interface UserResultListsProps {
  user: UserNode[];
}
const UserResultLists = ({ user }: UserResultListsProps): JSX.Element => {
  return (
    <UserResultListsContainer>
      <h2>{commaNumber(user.length)} User Results</h2>
      {user
        .filter(({ id }: UserNode) => id)
        .map((user: UserNode, key: number) => {
          return (
            <div key={key} className="user-result-list">
              <div className="title">
                <h4 className="main-title">{user.name || 'N/A'}</h4>
                <div className="sub-title">{user.email || 'N/A'}</div>
              </div>
              <div className="description">{user.bio || 'N/A'}</div>
            </div>
          );
        })}
    </UserResultListsContainer>
  );
};

export default UserResultLists;
