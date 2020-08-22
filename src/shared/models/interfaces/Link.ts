import { Project } from './Project';
import { User } from './User';

export interface Link {
  id?: string;

  title: string;

  link: string;

  ownerId: string;

  projectId: string;

  created?: Date;

  updated?: Date;

  owner?: User;

  project?: Project;
}
