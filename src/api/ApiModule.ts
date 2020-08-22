import { Module } from '@nestjs/common';
import { PingModule } from './ping/PingModule';
import { ImageModule } from './image/ImageModule';
import { AuthModule } from './auth/AuthModule';
import { ProjectModule } from './project/ProjectModule';
import { LabelModule } from './label/LabelModule';
import { LinkModule } from './link/LinkModule';

@Module({
  imports: [
    ImageModule,
    PingModule,
    AuthModule,
    LabelModule,
    LinkModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
