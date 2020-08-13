import { Project } from './Project';
import { User } from './User';

export interface Vacancy {
  id?: string;

  title: string;

  shareType: string;

  shareValue?: number;

  created: Date;

  updated?: Date;

  projectId: string;

  ownerId: string;

  isVacant: Boolean;

  aboutVacancy?: string;

  aboutFeatures?: string;

  owner?: User;

  project?: Project;
}
