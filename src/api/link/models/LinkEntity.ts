import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class LinkEntity {
  @ApiProperty({
    description: 'Название ссылки для отображения вместо ссылки',
    example: 'Openland',
  })
  @IsNotEmpty()
  @IsString()
  title!: string;

  @ApiProperty({
    description: 'Ссылка',
    example: 'https://openland.com/example',
  })
  @IsNotEmpty()
  @IsUrl()
  link!: string;
}
