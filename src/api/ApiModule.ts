import { Module } from '@nestjs/common';
import { PingModule } from './ping/PingModule';
import { ImageModule } from './image/ImageModule';
import { AuthModule } from './auth/AuthModule';

@Module({
  imports: [
    ImageModule,
    PingModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
