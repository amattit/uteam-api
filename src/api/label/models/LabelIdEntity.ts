import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class LabelIdEntity {
  @ApiProperty({
    description: 'Идентификатор лейбла',
    example: 'example-id',
    required: false,
  })
  @IsNotEmpty()
  @IsUUID()
  labelId!: string;
}
