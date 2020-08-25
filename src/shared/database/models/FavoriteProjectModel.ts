import {
  Entity,
  Column,
  Generated,
  PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './UserModel';

import { ProjectModel } from './ProjectModel';
import { FavoriteProject } from '../../models/interfaces/FavoriteProject';

@Entity({ name: 'FavoriteProjects' })
export class FavoriteProjectModel implements FavoriteProject {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  userId!: string;

  @Column()
  projectId!: string;

  @ManyToOne(() => UserModel)
  user?: UserModel;

  @ManyToOne(() => ProjectModel)
  project?: ProjectModel;
}
