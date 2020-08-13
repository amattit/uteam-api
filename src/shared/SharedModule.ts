import { Global, Module } from '@nestjs/common';
import { ImageRepositoryModule } from './repositories/image/ImageRepositoryModule';
import { DatabaseModule } from './database/DatabaseModule';
import { UserRepositoryModule } from './repositories/user/UserRepositoryModule';

const sharedModules = [
  ImageRepositoryModule,
  DatabaseModule,
  UserRepositoryModule,
];

@Global()
@Module({
  imports: sharedModules,
  exports: sharedModules,
})
export class SharedModule {}
