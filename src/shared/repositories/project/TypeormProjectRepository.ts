import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './ProjectRepository';
import { Project } from '../../models/interfaces/Project';
import { ProjectModel } from '../../database/models/ProjectModel';

@Injectable()
export class TypeormProjectRepository implements ProjectRepository {
  constructor(
    @InjectRepository(ProjectModel)
    private projectGenericRepository: Repository<ProjectModel>,
  ) {}

  getById(id: string): Promise<Project | undefined> {
    return this.projectGenericRepository.findOne(undefined, { where: { id } });
  }

  getList(): Promise<Project[]> {
    return this.projectGenericRepository.createQueryBuilder('project')
      .leftJoinAndSelect('project.owner', 'owner')
      .leftJoinAndSelect('project.labels', 'labels')
      .where('project.isPublished = :isPublished', { isPublished: true })
      .select(['project', 'owner.id', 'owner.username', 'owner.imagePath', 'owner.role', 'labels'])
      .getMany();
  }

  async create(project: Project): Promise<Project> {
    const {
      generatedMaps: [{ id, created }],
    } = await this.projectGenericRepository.insert(project);

    return {
      ...project,
      id,
      created,
    };
  }

  async update(id: string, project: Partial<Project>): Promise<void> {
    await this.projectGenericRepository.update({ id }, project);
  }

  async delete(id: string): Promise<void> {
    await this.projectGenericRepository.delete({ id });
  }
}
