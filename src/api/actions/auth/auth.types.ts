export type User = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  picture: string;
};

export type LoginMutationArguments = {
  username: string;
  password: string;
};

export type LoginMutationResponse = {
  accessToken: string;
  user: User;
};

export type GetMeArguments = {
  token: string;
};

export type GetMeResponse = User;
