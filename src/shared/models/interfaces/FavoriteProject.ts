import { Project } from './Project';
import { User } from './User';

export interface FavoriteProject {
  id?: string;

  userId: string;

  projectId: string;

  user?: User;

  project?: Project;
}
