import {
  Entity, Column, Generated, PrimaryColumn, OneToMany,
  ManyToMany,
  JoinTable,
  Unique,
  BeforeInsert, BeforeUpdate,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ProjectModel } from './ProjectModel';
import { ContactModel } from './ContactModel';

import { LinkModel } from './LinkModel';
import { VacancyModel } from './VacancyModel';
import { UserTokenModel } from './UserTokenModel';
import { User } from '../../models/interfaces/User';

@Entity({ name: 'User' })
@Unique(['email'])
export class UserModel implements User {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  username?: string;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created?: Date;

  @Column({ nullable: true })
  imagePath?: string;

  @Column({ nullable: true })
  role?: string;

  @Column({ nullable: true })
  about?: string;

  @ManyToMany(() => ProjectModel, (project) => project.users)
  @JoinTable({ name: 'UserProject' })
  projects?: ProjectModel[];

  @OneToMany(() => ContactModel, (contact) => contact.owner)
  contacts?: ContactModel[];

  @OneToMany(() => LinkModel, (link) => link.owner)
  links?: LinkModel[];

  @OneToMany(() => VacancyModel, (vacancy) => vacancy.project)
  vacancies?: VacancyModel[];

  @OneToMany(() => UserTokenModel, (userToken) => userToken.user)
  userToken?: UserTokenModel;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt(16);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  async checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    const isValid = await bcrypt.compare(unencryptedPassword, this.password);

    return isValid;
  }
}
