import React from 'react';
import Header from '../../components/Header';
import RepositoryResultLists from '../../components/RepositoryResultLists';
import ResultTab from '../../components/ResultTab';
import UserResultLists from '../../components/UserResultLists';
import { ResultContainer } from './styles';

import queryString from 'query-string';
import { useHistory } from 'react-router';

const Result = (): JSX.Element => {
  const [active, setActive] = React.useState('repository');
  const [query, setQuery] = React.useState('');
  const history = useHistory();

  const resultTabProps = { active, setActive };

  React.useEffect(() => {
    const params = queryString.parse(history.location.search);
    const query = params['q'] || '';
    setQuery(query as string);
  }, []);

  return (
    <ResultContainer>
      <Header />
      <div className="search-result-body">
        <ResultTab {...resultTabProps} />
        <div className="lists">
          {active === 'repository' ? (
            <RepositoryResultLists query={query} />
          ) : (
            <UserResultLists query={query} />
          )}
        </div>
      </div>
    </ResultContainer>
  );
};

export default Result;
