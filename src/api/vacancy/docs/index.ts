import {
  ApiBearerAuth, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const VacancyTags = ApiTags('Vacancy');

export const AddVacancyMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Добавление вакансии в проект' }),
  ApiBearerAuth('JWT'),
);

export const UpdateVacancyMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Изменение данных вакансии проекта' }),
  ApiBearerAuth('JWT'),
);

export const DeleteVacancyMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Удаление вакансии проекта' }),
  ApiBearerAuth('JWT'),
);
