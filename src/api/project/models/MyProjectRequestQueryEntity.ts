import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class MyProjectRequestQueryEntity {
  @ApiProperty({
    description: 'Флаг опубликован/не опубликован',
    example: true,
    required: false,
  })
  @IsOptional()
  @Transform((val: string) => val === 'true')
  isPublished?: string;
}
