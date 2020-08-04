import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const PingTags = ApiTags('Ping');

export const GettingPingMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Пинг сервера' }),
  ApiOkResponse({ type: String }),
);
