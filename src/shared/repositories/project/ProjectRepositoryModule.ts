import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormProjectRepository } from './TypeormProjectRepository';
import { ProjectModel } from '../../database/models/ProjectModel';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectModel])],
  providers: [
    {
      provide: 'ProjectRepository',
      useClass: TypeormProjectRepository,
    },
  ],
  exports: ['ProjectRepository'],
})
export class ProjectRepositoryModule {}
