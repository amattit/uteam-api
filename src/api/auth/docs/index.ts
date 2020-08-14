import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TokenResponseEntity } from '../model/TokenResponseEntity';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const AuthTags = ApiTags('Auth');

export const LoginMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение токена' }),

  ApiOkResponse({ type: TokenResponseEntity }),
);

export const SignUpMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Регистрация' }),

  ApiOkResponse({ type: TokenResponseEntity }),
);
