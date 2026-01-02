export type JwtPayload = {
  sub: number;
  email: string;
  username: string;
};

export type RequestUser = {
  userId: number;
  email: string;
  username: string;
};

export type JwtRequest = {
  user: RequestUser;
};

export type SignInResponse = {
  access_token: string;
};

export type GoogleUser = {
  profileId: string;
  username: string;
  email: string | null;
};

export type GoogleRequest = {
  user: GoogleUser;
};

export type GitHubUser = {
  profileId: string;
  username: string | null;
  email: string | null;
};

export type GitHubRequest = {
  user: GitHubUser;
};
