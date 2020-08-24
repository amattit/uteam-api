import { Module } from '@nestjs/common';
import { ContactController } from './ContactController';
import { ContactService } from './ContactService';

@Module({
  imports: [],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
