import { Module } from '@nestjs/common';
import { ProjectController } from './ProjectController';
import { ProjectService } from './ProjectService';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
