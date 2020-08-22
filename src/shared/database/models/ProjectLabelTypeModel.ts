import {
  Entity, Column, Generated, PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { ProjectLabelType } from '../../models/interfaces/ProjectLabelType';

import { ProjectModel } from './ProjectModel';
import { LabelTypeModel } from './LabelTypeModel';

@Entity({ name: 'ProjectLabelType' })
export class ProjectLabelTypeModel implements ProjectLabelType {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  projectId!: string;

  @Column()
  labelId!: string;

  @ManyToOne(() => ProjectModel)
  project?: ProjectModel;

  @ManyToOne(() => LabelTypeModel)
  label?: LabelTypeModel;
}
