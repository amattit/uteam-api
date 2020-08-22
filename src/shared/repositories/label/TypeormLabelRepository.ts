import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Injectable } from '@nestjs/common';
import { LabelRepository } from './LabelRepository';
import { LabelTypeModel } from '../../database/models/LabelTypeModel';
import { ProjectLabelTypeModel } from '../../database/models/ProjectLabelTypeModel';
import { LabelType } from '../../models/interfaces/LabelType';

@Injectable()
export class TypeormLabelRepository implements LabelRepository {
  constructor(
    @InjectRepository(LabelTypeModel)
    private labelTypeGenericRepository: Repository<LabelTypeModel>,
    @InjectRepository(ProjectLabelTypeModel)
    private projectLabelTypeGenericRepository: Repository<ProjectLabelTypeModel>,
  ) {}

  async addLabelsToProject(projectId: string, labelIds: string[]): Promise<void> {
    const projectLabelsForInsert = labelIds.map((labelId) => ({
      labelId,
      projectId,
    }));

    await this.projectLabelTypeGenericRepository.insert(projectLabelsForInsert);
  }

  async deleteProjectLabels(projectId: string): Promise<void> {
    await this.projectLabelTypeGenericRepository.delete({ projectId });
  }

  getAllLabelTypes(): Promise<LabelType[]> {
    return this.labelTypeGenericRepository.find();
  }
}
