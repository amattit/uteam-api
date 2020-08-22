import {
  ArgumentMetadata, BadRequestException, mixin, PipeTransform, Type, ValidationPipe,
} from '@nestjs/common';
import memoize from 'memoizee';

function createArrayValidationPipe<T>(itemType: Type<T>): Type<PipeTransform> {
  class MixinArrayValidationPipe extends ValidationPipe implements PipeTransform {
    transform(values: T[], metadata: ArgumentMetadata): Promise<any[]> {
      if (!Array.isArray(values)) {
        throw new BadRequestException('Body must be Array');
      }

      return Promise.all(values.map((value) => super.transform(value, { ...metadata, metatype: itemType })));
    }
  }

  return mixin(MixinArrayValidationPipe);
}

export const ArrayValidationPipe: <T>(itemType: Type<T>) => Type<PipeTransform> = memoize(createArrayValidationPipe);
