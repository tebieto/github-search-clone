import React from 'react';
import commaNumber from 'comma-number';
import { UserResultListsContainer } from './styles';
import Pagination from '../Pagination';
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
  const [currentPage, setCurrentPage] = React.useState(0);
  const handleSetCurrentPage = React.useCallback((page: number) => {
    setCurrentPage(page);
  }, []);
  const max = 10;
  return (
    <UserResultListsContainer>
      <h2>{commaNumber(user.length)} User Results</h2>
      {user
        .slice(currentPage * max, currentPage * max + max)
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
      <Pagination
        itemsLength={user.length}
        currentPage={currentPage}
        setCurrentPage={handleSetCurrentPage}
        max={max}
      />
    </UserResultListsContainer>
  );
};

export default UserResultLists;
