import { Vacancy } from '../../models/interfaces/Vacancy';

export interface VacancyRepository {
  create(vacancy: Vacancy): Promise<Vacancy>;
  update(id: string, link: Partial<Vacancy>): Promise<void>;
  delete(id: string): Promise<void>;
}
