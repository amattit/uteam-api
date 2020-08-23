import {
  ApiBearerAuth, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const ContactTags = ApiTags('Contact');

export const AddContactMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Добавление контактной сслыки в профиль' }),
  ApiBearerAuth('JWT'),
);

export const UpdateContactMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Изменение данных контактной сслыки профиля' }),
  ApiBearerAuth('JWT'),
);

export const DeleteContactMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Удаление контактной сслыки профиля' }),
  ApiBearerAuth('JWT'),
);
