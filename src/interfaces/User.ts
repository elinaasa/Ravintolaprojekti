interface User {
  user_id: string;
  username: string;
  email: string;
  user_level_id: number;
}

interface LoginUser {
  message: string;
  token: string;
  data: User;
}

interface UpdateUser {
  username: string;
  email: string;
}

export type {User, LoginUser, UpdateUser};
