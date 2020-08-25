import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Injectable } from '@nestjs/common';
import { FavoritesRepository } from './FavoritesRepository';
import { FavoriteProjectModel } from '../../database/models/FavoriteProjectModel';
import { FavoriteUserModel } from '../../database/models/FavoriteUserModel';
import { Project } from '../../models/interfaces/Project';
import { User } from '../../models/interfaces/User';

@Injectable()
export class TypeormFavoritesRepository implements FavoritesRepository {
  constructor(
    @InjectRepository(FavoriteProjectModel)
    private favoriteProjectGenericRepository: Repository<FavoriteProjectModel>,
    @InjectRepository(FavoriteUserModel)
    private favoriteUserGenericRepository: Repository<FavoriteUserModel>,
  ) {}

  getFavoritesUsers(userId: string): Promise<User[]> {
    return this.favoriteUserGenericRepository.createQueryBuilder('user')
      .innerJoinAndSelect('user.favoriteUser', 'favoriteUser')
      .where('user.userId = :userId', { userId })
      .select(['user.id', 'favoriteUser'])
      .getMany()
      .then((fvs) => fvs.map(({ favoriteUser }) => favoriteUser!));
  }

  getFavoritesProjects(userId: string): Promise<Project[]> {
    return this.favoriteProjectGenericRepository.createQueryBuilder('favoriteProject')
      .innerJoinAndSelect('favoriteProject.project', 'project')
      .leftJoinAndSelect('project.owner', 'owner')
      .leftJoinAndSelect('project.labels', 'labels')
      .where('favoriteProject.userId = :userId', { userId })
      .andWhere('project.isPublished = :isPublished', { isPublished: true })
      .select(['favoriteProject.id', 'project', 'owner', 'labels'])
      .orderBy('project.created', 'DESC')
      .getMany()
      .then((fvs) => fvs.map(({ project }) => project!));
  }

  async addFavoriteUser(userId: string, favoriteUserId: string): Promise<void> {
    await this.favoriteUserGenericRepository.insert({ userId, favoriteUserId });
  }

  async addFavoriteProject(userId: string, projectId: string): Promise<void> {
    await this.favoriteProjectGenericRepository.insert({ userId, projectId });
  }

  async deleteFavoriteUser(userId: string, favoriteUserId: string): Promise<void> {
    await this.favoriteUserGenericRepository.delete({ userId, favoriteUserId });
  }

  async deleteFavoriteProject(userId: string, projectId: string): Promise<void> {
    await this.favoriteProjectGenericRepository.delete({ userId, projectId });
  }
}
