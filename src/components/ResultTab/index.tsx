import React from 'react';
import { ResultTabContainer } from './styles';

interface ResultTabProps {
  active: string;
  setActive: { (active: string): void };
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
          <span>Repository</span> <span className="record-count">456k</span>
        </li>
        <li
          aria-label="user result nav"
          className={`nav-item ${active === 'user' && 'active'}`}
          onClick={() => setActive('user')}
        >
          <span>User</span> <span className="record-count">200</span>
        </li>
      </ul>
    </ResultTabContainer>
  );
};

export default ResultTab;
