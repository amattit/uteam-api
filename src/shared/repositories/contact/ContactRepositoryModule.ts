import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormContactRepository } from './TypeormContactRepository';
import { ContactModel } from '../../database/models/ContactModel';

@Module({
  imports: [TypeOrmModule.forFeature([ContactModel])],
  providers: [
    {
      provide: 'ContactRepository',
      useClass: TypeormContactRepository,
    },
  ],
  exports: ['ContactRepository'],
})
export class ContactRepositoryModule {}
