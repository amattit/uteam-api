import { Module } from '@nestjs/common';
import { ImageController } from './ImageController';
import { ImageService } from './ImageService';

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
