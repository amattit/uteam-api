import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl, MaxLength,
} from 'class-validator';

export class UserEntity {
  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Константин Александров',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name!: string;

  @ApiProperty({
    description: 'Email',
    example: 'example@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email!: string;

  @ApiProperty({
    description: 'Город проживания',
    example: 'Москва',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  location?: string;

  @ApiProperty({
    description: 'Дополнительная информация о пользователе',
    example: 'Стаж 5 лет в WEB разработке',
  })
  @IsOptional()
  @IsString()
  @MaxLength(6000)
  about?: string;

  @ApiProperty({
    description: 'Номер телефон пользователя',
    example: '+79829430001',
  })
  @IsOptional()
  @IsPhoneNumber(null)
  @MaxLength(255)
  phone?: string;

  @ApiProperty({
    description: 'Роль пользователя',
    example: 'Javascript developer',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  role?: string;

  @ApiProperty({
    description: 'Сслыка на аватарку',
    example: 'https://i.imgur.com/HtfFqvi.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(255)
  imagePath?: string;
}
