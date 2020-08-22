import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormVacancyRepository } from './TypeormVacancyRepository';
import { VacancyModel } from '../../database/models/VacancyModel';

@Module({
  imports: [TypeOrmModule.forFeature([VacancyModel])],
  providers: [
    {
      provide: 'VacancyRepository',
      useClass: TypeormVacancyRepository,
    },
  ],
  exports: ['VacancyRepository'],
})
export class VacancyRepositoryModule {}
