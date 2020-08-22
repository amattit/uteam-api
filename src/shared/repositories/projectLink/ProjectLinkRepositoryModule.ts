import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormProjectLinkRepository } from './TypeormProjectLinkRepository';
import { LinkModel } from '../../database/models/LinkModel';

@Module({
  imports: [TypeOrmModule.forFeature([LinkModel])],
  providers: [
    {
      provide: 'ProjectLinkRepository',
      useClass: TypeormProjectLinkRepository,
    },
  ],
  exports: ['ProjectLinkRepository'],
})
export class ProjectLinkRepositoryModule {}
