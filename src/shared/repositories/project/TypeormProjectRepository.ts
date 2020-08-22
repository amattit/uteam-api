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

  getFullById(id: string): Promise<Project | undefined> {
    return this.projectGenericRepository.createQueryBuilder('project')
      .leftJoinAndSelect('project.owner', 'owner')
      .leftJoinAndSelect('project.labels', 'labels')
      .leftJoinAndSelect('project.vacancies', 'vacancies')
      .leftJoinAndSelect('project.links', 'links')
      .where('project.id = :id', { id })
      .select(['project', 'owner', 'labels', 'links', 'vacancies'])
      .getOne();
  }

  getList(): Promise<Project[]> {
    return this.projectGenericRepository.createQueryBuilder('project')
      .leftJoinAndSelect('project.owner', 'owner')
      .leftJoinAndSelect('project.labels', 'labels')
      .where('project.isPublished = :isPublished', { isPublished: true })
      .select(['project', 'owner', 'labels'])
      .getMany();
  }

  getListByUserId(userId: string, isPublished: boolean): Promise<Project[]> {
    return this.projectGenericRepository.createQueryBuilder('project')
      .leftJoinAndSelect('project.owner', 'owner')
      .leftJoinAndSelect('project.labels', 'labels')
      .where('project.isPublished = :isPublished', { isPublished })
      .andWhere('project.ownerId = :userId', { userId })
      .select(['project', 'owner', 'labels'])
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
    await this.projectGenericRepository.save({
      ...project,
      id,
    });
  }

  async delete(id: string): Promise<void> {
    await this.projectGenericRepository.delete({ id });
  }
}
