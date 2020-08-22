import { LabelType } from './LabelType';
import { Project } from './Project';

export interface ProjectLabelType {
  id?: string;

  labelId: string;

  projectId: string;

  label?: LabelType;

  project?: Project;
}
