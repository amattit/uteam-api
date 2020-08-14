import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail, IsNotEmpty, IsOptional, IsUrl, Length, MaxLength,
} from 'class-validator';
import { Match } from '../../../shared/validators/MatchValidator';

export class SignUpRequestEntity {
  @ApiProperty({
    description: 'Имя',
    example: 'Константин',
  })
  @IsNotEmpty()
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
    description: 'Пароль',
    example: 'example123',
  })
  @IsNotEmpty()
  @Length(6, 255)
  password!: string;

  @ApiProperty({
    description: 'Подтверждение пароля',
    example: 'example123',
  })
  @Length(6, 255)
  @Match('password')
  verifyPassword!: string;

  @ApiProperty({
    description: 'Роль',
    example: 'Backend developer',
  })
  @IsOptional()
  @MaxLength(255)
  userRole!: string;

  @ApiProperty({
    description: 'Ссылка в Openland',
    example: 'https://openland.com/example',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(255)
  openLandProfileLink!: string;
}
