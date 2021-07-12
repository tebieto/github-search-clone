import React, { useState } from 'react';
import Header from '../../components/Header';
import RepositoryResultLists from '../../components/RepositoryResultLists';
import ResultTab from '../../components/ResultTab';
import UserResultLists from '../../components/UserResultLists';
import { ResultContainer } from './styles';
const Result = (): JSX.Element => {
  const [active, setActive] = useState('user');

  const resultTabProps = { active, setActive };
  return (
    <ResultContainer>
      <Header />
      <div className="search-result-body">
        <ResultTab {...resultTabProps} />
        <div className="lists">
          {active === 'repository' ? (
            <RepositoryResultLists />
          ) : (
            <UserResultLists />
          )}
        </div>
      </div>
    </ResultContainer>
  );
};

export default Result;
