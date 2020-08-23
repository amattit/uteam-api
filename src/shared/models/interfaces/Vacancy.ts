import { Project } from './Project';
import { User } from './User';
import VacancyShareType from '../enums/VacancyShareType';

export interface Vacancy {
  id?: string;

  title: string;

  shareType: VacancyShareType;

  created?: Date;

  updated?: Date;

  projectId: string;

  ownerId: string;

  isVacant: boolean;

  aboutVacancy?: string;

  aboutFeature?: string;

  owner?: User;

  project?: Project;
}
