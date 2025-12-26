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
