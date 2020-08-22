import {
  Entity, Column, Generated, PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './UserModel';

import { ProjectModel } from './ProjectModel';
import { Vacancy } from '../../models/interfaces/Vacancy';
import VacancyShareType from '../../models/enums/VacancyShareType';

@Entity({ name: 'Vacancy' })
export class VacancyModel implements Vacancy {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column({
    type: 'enum',
    enum: VacancyShareType,
  })
  shareType!: VacancyShareType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created?: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updated?: Date;

  @Column('uuid')
  projectId!: string;

  @Column('uuid')
  ownerId!: string;

  @Column()
  isVacant!: boolean;

  @Column()
  aboutVacancy?: string;

  @Column()
  aboutFeature?: string;

  @ManyToOne(() => UserModel, (user) => user.vacancies)
  owner?: UserModel;

  @ManyToOne(() => ProjectModel, (project) => project.vacancies)
  project?: ProjectModel;
}
