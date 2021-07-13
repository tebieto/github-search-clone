import React from 'react';
import { ResultTabContainer } from './styles';
import shortenNumber from 'short-number';
interface ResultTabProps {
  active: string;
  setActive: { (active: string): void };
  users: [];
  repositories: [];
}
const ResultTab = (props: ResultTabProps): JSX.Element => {
  const { active, setActive } = props;
  return (
    <ResultTabContainer>
      <ul aria-label="sidenav" className="nav">
        <li
          aria-label="repository result nav"
          className={`nav-item ${active === 'repository' && 'active'}`}
          onClick={() => setActive('repository')}
        >
          <span>Repository</span>{' '}
          <span className="record-count">
            {shortenNumber(props.repositories.length)}
          </span>
        </li>
        <li
          aria-label="user result nav"
          className={`nav-item ${active === 'user' && 'active'}`}
          onClick={() => setActive('user')}
        >
          <span>User</span>{' '}
          <span className="record-count">
            {shortenNumber(props.users.length)}
          </span>
        </li>
      </ul>
    </ResultTabContainer>
  );
};

export default ResultTab;
