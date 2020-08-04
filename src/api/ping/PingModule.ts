import { Module } from '@nestjs/common';
import { PingController } from './PingController';
import { PingService } from './PingService';

@Module({
  imports: [],
  controllers: [PingController],
  providers: [PingService],
})
export class PingModule {}
