import { Module } from '@nestjs/common';
import { VacancyController } from './VacancyController';
import { VacancyService } from './VacancyService';

@Module({
  imports: [],
  controllers: [VacancyController],
  providers: [VacancyService],
})
export class VacancyModule {}
