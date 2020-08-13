import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';
import { LoginResponseEntity } from '../model/LoginResponseEntity';

export const AuthTags = ApiTags('Auth');

export const LoginMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение токена' }),

  ApiOkResponse({ type: LoginResponseEntity }),
);
