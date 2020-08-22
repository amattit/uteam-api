import { Global, Module } from '@nestjs/common';
import { ImageRepositoryModule } from './image/ImageRepositoryModule';
import { DatabaseModule } from '../database/DatabaseModule';
import { UserRepositoryModule } from './user/UserRepositoryModule';
import { ContactRepositoryModule } from './contact/ContactRepositoryModule';
import { ProjectRepositoryModule } from './project/ProjectRepositoryModule';
import { LabelRepositoryModule } from './label/LabelRepositoryModule';
import { ProjectLinkRepositoryModule } from './projectLink/ProjectLinkRepositoryModule';
import { VacancyRepositoryModule } from './vacancy/VacancyRepositoryModule';

const sharedModules = [
  ImageRepositoryModule,
  DatabaseModule,
  UserRepositoryModule,
  ContactRepositoryModule,
  ProjectRepositoryModule,
  LabelRepositoryModule,
  ProjectLinkRepositoryModule,
  VacancyRepositoryModule,
];

@Global()
@Module({
  imports: sharedModules,
  exports: sharedModules,
})
export class RepositoryModule {}
