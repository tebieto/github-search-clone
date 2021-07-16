import { ACCESS_TOKEN_KEY } from './constants';

export const isLoggedIn = (): string | null =>
  localStorage.getItem(ACCESS_TOKEN_KEY);
