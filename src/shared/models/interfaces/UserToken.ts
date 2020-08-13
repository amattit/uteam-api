import { User } from './User';

export interface UserToken {
  id?: string;

  string: string;

  expiresAt: Date;

  userID: string;

  user?: User;
}
