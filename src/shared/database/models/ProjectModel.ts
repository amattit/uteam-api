import {
  Entity, Column, Generated, PrimaryColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

// eslint-disable-next-line import/no-cycle
import { UserModel } from './UserModel';

import { LinkModel } from './LinkModel';

import { LabelTypeModel } from './LabelTypeModel';
import { VacancyModel } from './VacancyModel';
import { Project } from '../../models/interfaces/Project';

@Entity({ name: 'Project' })
export class ProjectModel implements Project {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created?: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updated?: Date;

  @Column('uuid')
  ownerId!: string;

  @Column()
  imagePath?: string;

  @Column()
  isPublished!: boolean;

  @ManyToOne(() => UserModel)
  owner?: UserModel;

  @ManyToMany(() => UserModel, (user) => user.projects)
  @JoinTable({ name: 'UserProject' })
  users?: UserModel[];

  @ManyToMany(() => LabelTypeModel)
  @JoinTable({ name: 'ProjectLabelType', inverseJoinColumn: { name: 'labelId' } })
  labels?: LabelTypeModel[];

  @OneToMany(() => LinkModel, (link) => link.project)
  links?: LinkModel[];

  @OneToMany(() => VacancyModel, (vacancy) => vacancy.project)
  vacancies?: VacancyModel[];
}
