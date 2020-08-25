import {
  ApiBearerAuth, ApiOperation, ApiTags,
} from '@nestjs/swagger';
import { DecoratorHelper } from '../../../shared/helpers/DecoratorHelper';

export const FavoritesTags = ApiTags('Favorites');

export const GetFavoritesMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение списка избранных пользователей и проектов' }),
  ApiBearerAuth('JWT'),
);

export const GetFavoritesUsersMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение списка избранных пользователей' }),
  ApiBearerAuth('JWT'),
);

export const GetFavoritesProjectsMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Получение списка избранных проектов' }),
  ApiBearerAuth('JWT'),
);

export const AddFavoriteUserMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Добавление пользователя в избранные' }),
  ApiBearerAuth('JWT'),
);

export const AddFavoriteProjectMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Добавление проекта в избранные' }),
  ApiBearerAuth('JWT'),
);

export const DeleteFavoriteUserMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Удаление пользователя с избранных' }),
  ApiBearerAuth('JWT'),
);

export const DeleteFavoriteProjectMethodDocs = DecoratorHelper.composeDecorators(
  ApiOperation({ summary: 'Удаление проекта с избранных' }),
  ApiBearerAuth('JWT'),
);
