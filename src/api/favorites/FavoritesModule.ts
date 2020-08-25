import { Module } from '@nestjs/common';
import { FavoritesController } from './FavoritesController';
import { FavoritesService } from './FavoritesService';

@Module({
  imports: [],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
