export interface PostRequestProps {
  path: string;
  code?: string;
}

export interface PostResponseProps {
  data: { access_token: string };
}

export interface GithubResponseProps {
  code: string;
}
