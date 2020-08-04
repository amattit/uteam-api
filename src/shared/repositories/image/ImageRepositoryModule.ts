import { Module } from '@nestjs/common';
import { ImgurImageRepository } from '../../../imgur/ImgurImageRepository';

@Module({
  providers: [
    {
      provide: 'ImageRepository',
      useClass: ImgurImageRepository,
    },
  ],
  exports: ['ImageRepository'],
})
export class ImageRepositoryModule {}
