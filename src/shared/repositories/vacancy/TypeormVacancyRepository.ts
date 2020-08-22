import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Injectable } from '@nestjs/common';
import { VacancyRepository } from './VacancyRepository';
import { Vacancy } from '../../models/interfaces/Vacancy';
import { VacancyModel } from '../../database/models/VacancyModel';

@Injectable()
export class TypeormVacancyRepository implements VacancyRepository {
  constructor(
    @InjectRepository(VacancyModel)
    private vacancyGenericRepository: Repository<VacancyModel>,
  ) {}

  async create(vacancy: Vacancy): Promise<Vacancy> {
    const {
      generatedMaps: [{ id, created }],
    } = await this.vacancyGenericRepository.insert(vacancy);

    return {
      ...vacancy,
      id,
      created,
    };
  }

  async update(id: string, vacancy: Partial<Vacancy>): Promise<void> {
    await this.vacancyGenericRepository.save({
      ...vacancy,
      id,
    });
  }

  async delete(id: string): Promise<void> {
    await this.vacancyGenericRepository.delete({ id });
  }
}
