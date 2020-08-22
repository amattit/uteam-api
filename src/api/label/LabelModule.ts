import { Module } from '@nestjs/common';
import { LabelController } from './LabelController';
import { LabelService } from './LabelService';

@Module({
  imports: [],
  controllers: [LabelController],
  providers: [LabelService],
})
export class LabelModule {}
