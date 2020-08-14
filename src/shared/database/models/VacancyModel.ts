import {
  Entity, Column, Generated, PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './UserModel';

import { ProjectModel } from './ProjectModel';
import { Vacancy } from '../../models/interfaces/Vacancy';

@Entity({ name: 'Vacancy' })
export class VacancyModel implements Vacancy {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  shareType!: string;

  @Column()
  shareValue?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created!: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updated?: Date;

  @Column('uuid')
  projectId!: string;

  @Column('uuid')
  ownerId!: string;

  @Column()
  isVacant!: Boolean;

  @Column()
  aboutVacancy?: string;

  @Column()
  aboutFeatures?: string;

  @ManyToOne(() => UserModel, (user) => user.vacancies)
  owner?: UserModel;

  @ManyToOne(() => ProjectModel, (project) => project.vacancies)
  project?: ProjectModel;
}
