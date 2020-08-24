/* eslint-disable import/no-cycle */
import { Project } from './Project';
import { Contact } from './Contact';
import { Link } from './Link';
import { Vacancy } from './Vacancy';
import { UserToken } from './UserToken';

export interface User {
  id?: string;

  username?: string;

  email: string;

  password: string;

  created?: Date;

  imagePath?: string;

  location?: string;

  phone?: string;

  role?: string;

  about?: string;

  projects?: Project[];

  contacts?: Contact[];

  links?: Link[];

  vacancies?: Vacancy[];

  userToken?: UserToken;
}
