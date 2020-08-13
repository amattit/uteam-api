import {
  Entity, Column, Generated, PrimaryColumn, OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ProjectModel } from './ProjectModel';
import { ContactModel } from './ContactModel';

import { LinkModel } from './LinkModel';
import { VacancyModel } from './VacancyModel';
import { UserTokenModel } from './UserTokenModel';
import { User } from '../../models/interfaces/User';

@Entity({ name: 'User' })
export class UserModel implements User {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  username?: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created!: Date;

  @Column({ nullable: true })
  imagePath?: string;

  @Column({ nullable: true })
  role?: string;

  @Column({ nullable: true })
  about?: string;

  @ManyToMany(() => ProjectModel, (project) => project.users)
  @JoinTable()
  projects?: ProjectModel[];

  @OneToMany(() => ContactModel, (contact) => contact.owner)
  contacts?: ContactModel[];

  @OneToMany(() => LinkModel, (link) => link.owner)
  links?: LinkModel[];

  @OneToMany(() => VacancyModel, (vacancy) => vacancy.project)
  vacancies?: VacancyModel[];

  @OneToMany(() => UserTokenModel, (userToken) => userToken.user)
  userToken?: UserTokenModel;
}
