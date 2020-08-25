import { User } from './User';

export interface FavoriteUser {
  id?: string;

  userId: string;

  favoriteUserId: string;

  user?: User;

  favoriteUser?: User;
}
