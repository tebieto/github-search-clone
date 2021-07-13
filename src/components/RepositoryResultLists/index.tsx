import React from 'react';
import { RepositoryResultListsContainer } from './styles';

import shortenNumber from 'short-number';
import TimeAgo from 'timeago-react';
import commaNumber from 'comma-number';
import Pagination from '../Pagination';

interface RepositoryNode {
  id: string;
  name: string;
  description: string;
  stargazerCount: number;
  licenseInfo: { name: string };
  updatedAt: string;
  languages: {
    nodes: {
      name: string;
    }[];
  };
}

interface RepositoryResultListsProps {
  repository: RepositoryNode[];
}

const RepositoryResultLists = ({
  repository,
}: RepositoryResultListsProps): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const handleSetCurrentPage = React.useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const max = 10;

  return (
    <RepositoryResultListsContainer>
      <h2>{commaNumber(repository.length)} Repository Results</h2>
      {repository &&
        repository
          .slice(currentPage * max, currentPage * max + max)
          .filter(({ id }: RepositoryNode) => id)
          .map((repository: RepositoryNode, key: number) => {
            const language = repository.languages.nodes[0];
            const license = repository.licenseInfo;
            return (
              <div key={key} className="repository-result-list">
                <div className="title">
                  <h4 className="main-title">{repository.name}</h4>
                  <div className="sub-title">{repository.description}</div>
                </div>
                <div className="description">
                  {shortenNumber(repository.stargazerCount)} Stars |{' '}
                  {language ? language.name : ''} |{' '}
                  {license ? license.name : ''} | {' Updated '}
                  <TimeAgo datetime={repository.updatedAt} />
                </div>
              </div>
            );
          })}
      <Pagination
        itemsLength={repository.length}
        currentPage={currentPage}
        setCurrentPage={handleSetCurrentPage}
        max={max}
      />
    </RepositoryResultListsContainer>
  );
};

export default RepositoryResultLists;
