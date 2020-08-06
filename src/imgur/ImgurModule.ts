import { HttpModule, Module } from '@nestjs/common';
import { ImgurImageRepository } from './ImgurImageRepository';
import { imgurConfig } from './config/imgurConfig';

@Module({
  imports: [HttpModule.register({ baseURL: imgurConfig.url, headers: { Authorization: `Client-ID ${imgurConfig.clientId}` } })],
  providers: [
    {
      provide: ImgurImageRepository,
      useClass: ImgurImageRepository,
    },
  ],
  exports: [ImgurImageRepository],
})
export class ImgurModule {}
