import { Global, Module } from '@nestjs/common';
import { ImageRepositoryModule } from './repositories/image/ImageRepositoryModule';

const sharedModules = [
  ImageRepositoryModule,
];

@Global()
@Module({
  imports: sharedModules,
  exports: sharedModules,
})
export class SharedModule {}
