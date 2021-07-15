import { authenticateUser } from './post';

jest.mock('axios', () => ({
  post: () =>
    Promise.resolve({ data: { data: { access_token: 'abcd_token' } } }),
}));

describe('authenticateUser', () => {
  it('returns response containing access code', async () => {
    const response = await authenticateUser('code');
    expect(response.data.access_token).toEqual('abcd_token');
  });
});
