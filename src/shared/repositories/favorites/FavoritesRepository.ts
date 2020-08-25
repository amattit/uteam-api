import { User } from '../../models/interfaces/User';
import { Project } from '../../models/interfaces/Project';

export interface FavoritesRepository {
  getFavoritesUsers(userId: string): Promise<User[]>;
  getFavoritesProjects(userId: string): Promise<Project[]>;
  addFavoriteUser(userId: string, favoriteUserId: string): Promise<void>;
  addFavoriteProject(userId: string, projectId: string): Promise<void>;
  deleteFavoriteUser(userId: string, favoriteUserId: string): Promise<void>;
  deleteFavoriteProject(userId: string, projectId: string): Promise<void>;
}
