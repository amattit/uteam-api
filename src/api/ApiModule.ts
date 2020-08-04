import { Module } from '@nestjs/common';
import { PingModule } from './ping/PingModule';
import { ImageModule } from './image/ImageModule';

@Module({
  imports: [
    ImageModule,
    PingModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
