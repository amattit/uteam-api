import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty, IsOptional, IsUrl, Length, MaxLength,
} from 'class-validator';

export class SavingProjectEntity {
  @ApiProperty({
    description: 'Название проекта',
    example: 'UTeam',
  })
  @IsNotEmpty()
  @MaxLength(255)
  name!: string;

  @ApiProperty({
    description: 'Описание проекта',
    example: 'UTeam - размещайте свои проекты и находите со-создателей',
  })
  @IsNotEmpty()
  @Length(3, 255)
  description!: string;

  @ApiProperty({
    description: 'Ссылка на картинку проекта',
    example: 'https://i.imgur.com/M3tqAav.jpg',
  })
  @IsOptional()
  @IsUrl()
  imagePath?: string;
}
