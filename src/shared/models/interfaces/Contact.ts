import { User } from './User';

export interface Contact {
  id?: string;

  title: string;

  link: string;

  created?: Date;

  updated?: Date;

  ownerId?: string;

  owner?: User;
}
