import {
  Inject, Injectable, NotFoundException, Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { VacancyEntity } from './models/VacancyEntity';
import { ProjectRepository } from '../../shared/repositories/project/ProjectRepository';
import { VacancyRepository } from '../../shared/repositories/vacancy/VacancyRepository';

@Injectable({ scope: Scope.REQUEST })
export class VacancyService {
  constructor(
    @Inject('ProjectRepository') private projectRepository: ProjectRepository,
    @Inject('VacancyRepository') private vacancyRepository: VacancyRepository,
    @Inject(REQUEST) private readonly request: Request,
  ) {
  }

  async addVacancyToProject(projectId: string, vacancy: VacancyEntity) {
    if (!(await this.hasRuleOnChangeProject(projectId))) {
      throw new NotFoundException('Project not found');
    }

    return this.vacancyRepository.create({
      ...vacancy,
      projectId,
      ownerId: this.request.user!.id,
      isVacant: true,
    });
  }

  async updateVacancy(projectId: string, vacancyId: string, vacancy: VacancyEntity) {
    if (!(await this.hasRuleOnChangeProject(projectId))) {
      throw new NotFoundException('Project not found');
    }

    return this.vacancyRepository.update(vacancyId, {
      ...vacancy,
    });
  }

  async deleteVacancy(projectId: string, vacancyId: string) {
    if (!(await this.hasRuleOnChangeProject(projectId))) {
      throw new NotFoundException('Project not found');
    }

    return this.vacancyRepository.delete(vacancyId);
  }

  private async hasRuleOnChangeProject(id: string) {
    const project = await this.projectRepository.getById(id);

    return project && project.ownerId === this.request.user?.id;
  }
}
