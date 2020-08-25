import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormFavoritesRepository } from './TypeormFavoritesRepository';
import { FavoriteUserModel } from '../../database/models/FavoriteUserModel';
import { FavoriteProjectModel } from '../../database/models/FavoriteProjectModel';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteUserModel, FavoriteProjectModel])],
  providers: [
    {
      provide: 'FavoritesRepository',
      useClass: TypeormFavoritesRepository,
    },
  ],
  exports: ['FavoritesRepository'],
})
export class FavoritesRepositoryModule {}
