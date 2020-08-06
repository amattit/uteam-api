import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './config/ormconfig';

const typeormModule = TypeOrmModule.forRoot(ormconfig);

@Module({
  imports: [typeormModule],
  exports: [typeormModule],
})
export class DatabaseModule {}
