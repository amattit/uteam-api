import {
  Entity, Column, Generated, PrimaryColumn, OneToMany,
} from 'typeorm';
import { Project } from './Project';

@Entity()
export class User {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  username?: string;

  @Column()
  email!: string;

  @Column()
  password!: boolean;

  @Column('timestamp')
  created!: Date;

  @Column()
  imagePath?: string;

  @Column()
  role?: string;

  @Column()
  about?: string;

  @OneToMany(() => Project, (project) => project.user)
  projects?: Project[];
  // TODO: Добавить ссылку на дочерние проекты
  // TODO: добавить ссылку на контакты
}
