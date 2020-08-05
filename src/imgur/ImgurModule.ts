import { HttpModule, Module } from '@nestjs/common';
import { ImgurImageRepository } from './ImgurImageRepository';

@Module({
  imports: [HttpModule.register({ baseURL: 'https://api.imgur.com/3', headers: { Authorization: 'Client-ID 91e8d85c668e81d' } })],
  providers: [
    {
      provide: ImgurImageRepository,
      useClass: ImgurImageRepository,
    },
  ],
  exports: [ImgurImageRepository],
})
export class ImgurModule {}
