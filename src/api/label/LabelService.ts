import {
  Inject, Injectable, NotFoundException, Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { ProjectRepository } from '../../shared/repositories/project/ProjectRepository';
import { LabelIdEntity } from './models/LabelIdEntity';
import { LabelRepository } from '../../shared/repositories/label/LabelRepository';

@Injectable({ scope: Scope.REQUEST })
export class LabelService {
  constructor(
    @Inject('ProjectRepository') private projectRepository: ProjectRepository,
    @Inject('LabelRepository') private labelRepository: LabelRepository,
    @Inject(REQUEST) private readonly request: Request,
  ) {
  }

  async getAllLabels() {
    return this.labelRepository.getAllLabelTypes();
  }

  async saveLabels(projectId: string, labels: LabelIdEntity[]) {
    if (!(await this.hasRuleOnChangeProject(projectId))) {
      throw new NotFoundException('Project not found');
    }

    await this.labelRepository.deleteProjectLabels(projectId);
    await this.labelRepository.addLabelsToProject(projectId, labels.map(({ labelId }) => labelId));
  }

  private async hasRuleOnChangeProject(id: string) {
    const project = await this.projectRepository.getById(id);

    return project && project.ownerId === this.request.user?.id;
  }
}
