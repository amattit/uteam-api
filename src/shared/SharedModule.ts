import { Global, Module } from '@nestjs/common';
import { ImageRepositoryModule } from './repositories/image/ImageRepositoryModule';
import { DatabaseModule } from './database/DatabaseModule';

const sharedModules = [
  ImageRepositoryModule,
  DatabaseModule,
];

@Global()
@Module({
  imports: sharedModules,
  exports: sharedModules,
})
export class SharedModule {}
