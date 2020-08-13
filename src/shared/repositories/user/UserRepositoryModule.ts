import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../../database/models/UserModel';
import { TypeormUserRepository } from './TypeormUserRepository';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [
    {
      provide: 'UserRepository',
      useClass: TypeormUserRepository,
    },
  ],
  exports: ['UserRepository'],
})
export class UserRepositoryModule {}
