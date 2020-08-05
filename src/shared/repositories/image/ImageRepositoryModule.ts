import { Module } from '@nestjs/common';
import { ImgurImageRepository } from '../../../imgur/ImgurImageRepository';
import { ImgurModule } from '../../../imgur/ImgurModule';

@Module({
  imports: [ImgurModule],
  providers: [
    {
      provide: 'ImageRepository',
      useExisting: ImgurImageRepository,
    },
  ],
  exports: ['ImageRepository'],
})
export class ImageRepositoryModule {}
