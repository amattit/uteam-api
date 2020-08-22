import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormLabelRepository } from './TypeormLabelRepository';
import { LabelTypeModel } from '../../database/models/LabelTypeModel';
import { ProjectLabelTypeModel } from '../../database/models/ProjectLabelTypeModel';

@Module({
  imports: [TypeOrmModule.forFeature([LabelTypeModel, ProjectLabelTypeModel])],
  providers: [
    {
      provide: 'LabelRepository',
      useClass: TypeormLabelRepository,
    },
  ],
  exports: ['LabelRepository'],
})
export class LabelRepositoryModule {}
