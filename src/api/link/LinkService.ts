import {
  Inject, Injectable, NotFoundException, Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { LinkEntity } from './models/LinkEntity';
import { ProjectLinkRepository } from '../../shared/repositories/projectLink/ProjectLinkRepository';
import { ProjectRepository } from '../../shared/repositories/project/ProjectRepository';

@Injectable({ scope: Scope.REQUEST })
export class LinkService {
  constructor(
    @Inject('ProjectRepository') private projectRepository: ProjectRepository,
    @Inject('ProjectLinkRepository') private projectLinkRepository: ProjectLinkRepository,
    @Inject(REQUEST) private readonly request: Request,
  ) {
  }

  async addLinkToProject(projectId: string, link: LinkEntity) {
    if (!(await this.hasRuleOnChangeProject(projectId))) {
      throw new NotFoundException('Project not found');
    }

    return this.projectLinkRepository.create({
      ...link,
      projectId,
      ownerId: this.request.user!.id,
    });
  }

  async updateProjectLink(projectId: string, linkId: string, link: LinkEntity) {
    if (!(await this.hasRuleOnChangeProject(projectId))) {
      throw new NotFoundException('Project not found');
    }

    return this.projectLinkRepository.update(linkId, {
      ...link,
    });
  }

  async deleteProjectLink(projectId: string, linkId: string) {
    if (!(await this.hasRuleOnChangeProject(projectId))) {
      throw new NotFoundException('Project not found');
    }

    return this.projectLinkRepository.delete(linkId);
  }

  private async hasRuleOnChangeProject(id: string) {
    const project = await this.projectRepository.getById(id);

    return project && project.ownerId === this.request.user?.id;
  }
}
