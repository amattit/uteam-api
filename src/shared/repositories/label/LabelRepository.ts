import { LabelType } from '../../models/interfaces/LabelType';

export interface LabelRepository {
  getAllLabelTypes(): Promise<LabelType[]>;
  addLabelsToProject(projectId: string, labelIds: string[]): Promise<void>;
  deleteProjectLabels(projectId: string): Promise<void>;
}
