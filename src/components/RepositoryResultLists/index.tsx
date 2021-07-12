import { useQuery } from '@apollo/client';
import React from 'react';
import { SEARCH_REPOSITORY } from '../../graphql/mutation';
import { RepositoryResultListsContainer } from './styles';

interface RepositoryResultListsProps {
  query: string;
}

const RepositoryResultLists = ({
  query,
}: RepositoryResultListsProps): JSX.Element => {
  const { data, error, loading } = useQuery(SEARCH_REPOSITORY, {
    variables: { query },
  });
  console.log({ data, error, loading });
  return (
    <RepositoryResultListsContainer>
      <h2>2,859 Repositories</h2>
      <div className="repository-result-list">
        <div className="title">
          <h4 className="main-title">Some Repo</h4>
          <div className="sub-title">Lorem Ipsum Dollor for repo</div>
        </div>
        <div className="description">
          Some longer text to fill some space. This ui is for repository list
        </div>
      </div>
    </RepositoryResultListsContainer>
  );
};

export default RepositoryResultLists;
