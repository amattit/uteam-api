import {
  ApiBearerAuth, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const LinkTags = ApiTags('Link');

export const AddLinkMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Добавление ссылки в проект' }),
  ApiBearerAuth('JWT'),
);

export const UpdateProjectLinkMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Изменение данных ссылки проекта' }),
  ApiBearerAuth('JWT'),
);

export const DeleteProjectLinkMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Удаление ссылки проекта' }),
  ApiBearerAuth('JWT'),
);
