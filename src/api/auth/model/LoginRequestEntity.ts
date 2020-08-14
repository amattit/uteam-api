import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginRequestEntity {
  @ApiProperty({
    description: 'Email',
    example: 'example@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({
    description: 'Пароль',
    example: 'example123',
  })
  @IsNotEmpty()
  @Length(6, 255)
  password!: string;
}
