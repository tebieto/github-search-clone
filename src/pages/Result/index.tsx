import React from 'react';
import Header from '../../components/Header';
import RepositoryResultLists from '../../components/RepositoryResultLists';
import ResultTab from '../../components/ResultTab';
import UserResultLists from '../../components/UserResultLists';
import { ResultContainer } from './styles';

import queryString from 'query-string';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import { SEARCH_REPOSITORY, SEARCH_USER } from '../../graphql/mutation';
import Loader from '../../components/Loader';
import Title from '../../components/Title';
import { getPageTitle } from '../../utils';

const Result = (): JSX.Element => {
  const [active, setActive] = React.useState('repository');
  const [query, setQuery] = React.useState('');
  const history = useHistory();
  const params = queryString.parse(history.location.search);
  React.useEffect(() => {
    const query = params['q'] || '';
    setQuery(query as string);
  }, [params]);

  const { data: userData, loading: userLoading } = useQuery(SEARCH_USER, {
    variables: { query },
  });

  const { data: repositoryData, loading: repositoryLoading } = useQuery(
    SEARCH_REPOSITORY,
    {
      variables: { query },
    },
  );

  const repositories = repositoryData && repositoryData.search.nodes;
  const users = userData && userData.search.nodes;
  const resultTabProps = { active, setActive, repositories, users };

  return (
    <ResultContainer>
      <Title title={getPageTitle('Result')} />
      <Header query={query} />
      {userLoading || repositoryLoading ? (
        <Loader />
      ) : (
        <div className="search-result-body">
          <ResultTab {...resultTabProps} />
          <div className="lists">
            {active === 'repository'
              ? repositoryData && (
                  <RepositoryResultLists repository={repositories} />
                )
              : userData && <UserResultLists user={users} />}
          </div>
        </div>
      )}
    </ResultContainer>
  );
};

export default Result;
