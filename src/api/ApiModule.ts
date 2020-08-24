import { Module } from '@nestjs/common';
import { PingModule } from './ping/PingModule';
import { ImageModule } from './image/ImageModule';
import { AuthModule } from './auth/AuthModule';
import { ProjectModule } from './project/ProjectModule';
import { LabelModule } from './label/LabelModule';
import { LinkModule } from './link/LinkModule';
import { VacancyModule } from './vacancy/VacancyModule';
import { UserModule } from './user/UserModule';
import { ContactModule } from './contact/ContactModule';

@Module({
  imports: [
    ImageModule,
    PingModule,
    AuthModule,
    ContactModule,
    UserModule,
    LabelModule,
    LinkModule,
    VacancyModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
