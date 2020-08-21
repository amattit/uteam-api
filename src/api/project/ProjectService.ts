import {
  Inject, Injectable, NotFoundException, Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { SavingProjectEntity } from './models/CreateProjectRequestEntity';
import { ProjectRepository } from '../../shared/repositories/project/ProjectRepository';
import { Project } from '../../shared/models/interfaces/Project';

@Injectable({ scope: Scope.REQUEST })
export class ProjectService {
  constructor(
    @Inject('ProjectRepository') private projectRepository: ProjectRepository,
    @Inject(REQUEST) private readonly request: Request,
  ) {
  }

  getProjects(): Promise<Project[]> {
    return this.projectRepository.getList();
  }

  async getProject(id: string): Promise<Project> {
    const project = await this.projectRepository.getFullById(id);

    if (project && this.hasRuleOnViewProject(project)) {
      return project;
    }

    throw new NotFoundException('Project not found');
  }

  createProject(project: SavingProjectEntity): Promise<Project> {
    const {
      description,
      imagePath,
      name: title,
    } = project;

    return this.projectRepository.create({
      description,
      imagePath,
      title,
      isPublished: false,
      ownerId: this.request.user!.id,
    });
  }

  async updateProject(id: string, project: SavingProjectEntity): Promise<void> {
    if (!(await this.hasRuleOnChangeProject(id))) {
      throw new NotFoundException('Project not found');
    }

    const {
      description,
      imagePath,
      name: title,
    } = project;

    return this.projectRepository.update(id, {
      description,
      imagePath,
      title,
    });
  }

  async publishProject(id: string): Promise<void> {
    if (!(await this.hasRuleOnChangeProject(id))) {
      throw new NotFoundException('Project not found');
    }

    return this.projectRepository.update(id, { isPublished: true });
  }

  async draftProject(id: string): Promise<void> {
    if (!(await this.hasRuleOnChangeProject(id))) {
      throw new NotFoundException('Project not found');
    }

    return this.projectRepository.update(id, { isPublished: false });
  }

  async deleteProject(id: string): Promise<void> {
    if (!(await this.hasRuleOnChangeProject(id))) {
      throw new NotFoundException('Project not found');
    }

    return this.projectRepository.delete(id);
  }

  private async hasRuleOnChangeProject(id: string) {
    const project = await this.projectRepository.getById(id);

    return project && project.ownerId === this.request.user?.id;
  }

  private hasRuleOnViewProject(project: Project) {
    return project.isPublished || project.ownerId === this.request.user?.id;
  }
}
