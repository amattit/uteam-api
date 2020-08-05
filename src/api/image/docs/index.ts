import {
  ApiBody, ApiConsumes, ApiOkResponse, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const ImageTags = ApiTags('Image');

export const SavingImageMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Загрузка картинок' }),
  ApiConsumes('multipart/form-data'),
  ApiBody({
    type: 'multipart/form-data',
    required: true,
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  }),
  ApiOkResponse({ type: String }),
);
