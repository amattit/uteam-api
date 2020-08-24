import {
  ApiBearerAuth, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const UserTags = ApiTags('User');

export const GetAllUsersMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение списка пользователей' }),
);

export const GetUserByIdMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение пользователя по идентификатору' }),
  ApiBearerAuth('JWT'),
);

export const UpdateUserMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Изменение профиля пользователя' }),
  ApiBearerAuth('JWT'),
);
