/* eslint-disable import/no-cycle */
import { User } from './User';
import { Link } from './Link';
import { Vacancy } from './Vacancy';
import { LabelType } from './LabelType';

export interface Project {
  id?: string;

  title: string;

  description: string;

  created?: Date;

  updated?: Date;

  ownerId: string;

  imagePath?: string;

  isPublished: boolean;

  owner?: User;

  users?: User[];

  labels?: LabelType[];

  links?: Link[];

  vacancies?: Vacancy[];
}
