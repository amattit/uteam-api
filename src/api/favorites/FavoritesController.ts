import {
  Controller, Delete, Get, Param, Post, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FavoritesService } from './FavoritesService';
import {
  FavoritesTags,
  AddFavoriteProjectMethodDocs,
  AddFavoriteUserMethodDocs,
  DeleteFavoriteProjectMethodDocs,
  DeleteFavoriteUserMethodDocs,
  GetFavoritesProjectsMethodDocs,
  GetFavoritesUsersMethodDocs, GetFavoritesMethodDocs,
} from './docs';

@Controller('v1/user/favorites')
@FavoritesTags
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @GetFavoritesMethodDocs
  async getFavorites() {
    const [
      users,
      projects,
    ] = await Promise.all([
      this.favoritesService.getFavoritesUsers(),
      this.favoritesService.getFavoritesProjects(),
    ]);

    return {
      users,
      projects,
    };
  }

  @Get('user')
  @UseGuards(AuthGuard('jwt'))
  @GetFavoritesUsersMethodDocs
  getFavoritesUsers() {
    return this.favoritesService.getFavoritesUsers();
  }

  @Get('project')
  @UseGuards(AuthGuard('jwt'))
  @GetFavoritesProjectsMethodDocs
  getFavoritesProjects() {
    return this.favoritesService.getFavoritesProjects();
  }

  @Post('user/:userId')
  @UseGuards(AuthGuard('jwt'))
  @AddFavoriteUserMethodDocs
  addFavoriteUser(@Param('userId') userId: string) {
    return this.favoritesService.addFavoriteUser(userId);
  }

  @Post('project/:projectId')
  @UseGuards(AuthGuard('jwt'))
  @AddFavoriteProjectMethodDocs
  addFavoriteProject(@Param('projectId') projectId: string) {
    return this.favoritesService.addFavoriteProject(projectId);
  }

  @Delete('user/:userId')
  @UseGuards(AuthGuard('jwt'))
  @DeleteFavoriteUserMethodDocs
  deleteFavoriteUser(@Param('userId') userId: string) {
    return this.favoritesService.deleteFavoriteUser(userId);
  }

  @Delete('project/:projectId')
  @UseGuards(AuthGuard('jwt'))
  @DeleteFavoriteProjectMethodDocs
  deleteFavoriteProject(@Param('projectId') projectId: string) {
    return this.favoritesService.deleteFavoriteProject(projectId);
  }
}
