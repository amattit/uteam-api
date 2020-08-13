import {
  Entity, Column, Generated, PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './UserModel';

import { ProjectModel } from './ProjectModel';
import { Link } from '../../models/interfaces/Link';

@Entity()
export class LinkModel implements Link {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  link!: string;

  @Column('uuid')
  ownerId!: string;

  @Column('uuid')
  projectId!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created!: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updated?: Date;

  @ManyToOne(() => UserModel, (user) => user.links)
  owner?: UserModel;

  @ManyToOne(() => ProjectModel, (project) => project.links)
  project?: ProjectModel;
}
