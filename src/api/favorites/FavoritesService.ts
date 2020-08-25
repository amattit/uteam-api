import {
  Inject, Injectable, Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { FavoritesRepository } from '../../shared/repositories/favorites/FavoritesRepository';

@Injectable({ scope: Scope.REQUEST })
export class FavoritesService {
  constructor(
    @Inject('FavoritesRepository') private favoritesRepository: FavoritesRepository,
    @Inject(REQUEST) private readonly request: Request,
  ) {
  }

  getFavoritesUsers() {
    return this.favoritesRepository
      .getFavoritesUsers(this.request.user!.id)
      .then((users) => users.map(({ email, ...rest }) => rest));
  }

  getFavoritesProjects() {
    return this.favoritesRepository
      .getFavoritesProjects(this.request.user!.id);
  }

  async addFavoriteUser(favoriteUserId: string): Promise<void> {
    await this.favoritesRepository.addFavoriteUser(this.request.user!.id, favoriteUserId);
  }

  async addFavoriteProject(projectId: string): Promise<void> {
    await this.favoritesRepository.addFavoriteProject(this.request.user!.id, projectId);
  }

  async deleteFavoriteUser(favoriteUserId: string): Promise<void> {
    await this.favoritesRepository.deleteFavoriteUser(this.request.user!.id, favoriteUserId);
  }

  async deleteFavoriteProject(projectId: string): Promise<void> {
    await this.favoritesRepository.deleteFavoriteProject(this.request.user!.id, projectId);
  }
}
