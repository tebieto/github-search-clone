import axios from 'axios';
import { PostRequestProps, PostResponseProps } from '../interface';
import { AUTH_BASE_URL } from '../utils/constants';

export const postWithAxios = async (
  props: PostRequestProps,
): Promise<PostResponseProps> => {
  const { path, ...otherProps } = props;
  return axios.post(path, { ...otherProps }, {}).then((res) => res.data);
};

export const postRequest = (
  props: PostRequestProps,
): Promise<PostResponseProps> => {
  return postWithAxios(props);
};

export const authenticateUser = (
  authenticationCode: string,
): Promise<PostResponseProps> => {
  return postRequest({ path: AUTH_BASE_URL, code: authenticationCode });
};
