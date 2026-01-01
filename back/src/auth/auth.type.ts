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
  email: string;
};

export type GoogleRequest = {
  user: GoogleUser;
};
