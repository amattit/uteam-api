import {
  ApiBearerAuth, ApiBody, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';
import { LabelIdEntity } from '../models/LabelIdEntity';

export const LabelTags = ApiTags('Label');

export const GetLabelsMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение справочника лейблов' }),
);

export const SaveLabelsMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Сохранение лейблов проекта' }),
  ApiBearerAuth('JWT'),
  ApiBody({
    type: LabelIdEntity,
    isArray: true,
  }),
);
