import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min,
} from 'class-validator';
import VacancyShareType from '../../../shared/models/enums/VacancyShareType';

export class VacancyEntity {
  @ApiProperty({
    description: 'Название вакансии',
    example: 'SEO Спецалист',
  })
  @IsNotEmpty()
  @IsString()
  title!: string;

  @ApiProperty({
    description: 'Тип сотрудничества',
    example: VacancyShareType.share,
    enum: Object.values(VacancyShareType),
  })
  @IsNotEmpty()
  @IsEnum(VacancyShareType)
  shareType!: VacancyShareType;

  @ApiProperty({
    description: 'Доля в проекте %',
    example: 10,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  value?: number;

  @ApiProperty({
    description: 'Дополнительная информация о вакансии',
    example: 'Нужен человек для настройки SEO для google и yandex',
  })
  @IsOptional()
  @IsString()
  aboutVacancy?: string;
}
