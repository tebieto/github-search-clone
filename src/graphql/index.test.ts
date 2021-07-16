import { client } from '.';
import { SEARCH_REPOSITORY, SEARCH_USER } from './mutation';

describe('SEARCH_REPOSITORY', () => {
  it('should be an Object with accessible values', () => {
    expect(SEARCH_REPOSITORY).toHaveAccessibleDescription;
  });
});

describe('SEARCH_USER', () => {
  it('should be an Object with accessible values', () => {
    expect(SEARCH_USER).toHaveAccessibleDescription;
  });
});

describe('client', () => {
  it('should be an Object with accessible values', () => {
    expect(client).toHaveAccessibleDescription;
  });
});
