import {
  ApiBearerAuth, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const ProjectTags = ApiTags('Project');

export const GettingProjectsMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение спика проектов' }),
);

export const GettingMyProjectsMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение спика моих проектов' }),
  ApiBearerAuth('JWT'),
);

export const GettingProjectByIdMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение проекта по идентификатору' }),
  ApiBearerAuth('JWT'),
);

export const CreatingProjectMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Создание проекта' }),
  ApiBearerAuth('JWT'),
);

export const UpdatingProjectMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Обновление информации проекта' }),
  ApiBearerAuth('JWT'),
);

export const PublishingProjectMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Публикация проекта' }),
  ApiBearerAuth('JWT'),
);

export const DraftingProjectMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Снятие с публикации проекта' }),
  ApiBearerAuth('JWT'),
);

export const DeletingProjectMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Удаление проекта' }),
  ApiBearerAuth('JWT'),
);
