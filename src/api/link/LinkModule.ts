import { Module } from '@nestjs/common';
import { LinkController } from './LinkController';
import { LinkService } from './LinkService';

@Module({
  imports: [],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
