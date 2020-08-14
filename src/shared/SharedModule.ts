import { Global, Module } from '@nestjs/common';
import { RepositoryModule } from './repositories/RepositoryModule';

const sharedModules = [
  RepositoryModule,
];

@Global()
@Module({
  imports: sharedModules,
  exports: sharedModules,
})
export class SharedModule {}
