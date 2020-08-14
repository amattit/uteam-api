import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Injectable } from '@nestjs/common';
import { ContactRepository } from './ContactRepository';
import { ContactModel } from '../../database/models/ContactModel';
import { Contact } from '../../models/interfaces/Contact';

@Injectable()
export class TypeormContactRepository implements ContactRepository {
  constructor(
    @InjectRepository(ContactModel)
    private contactGenericRepository: Repository<ContactModel>,
  ) {}

  async create(contact: Contact): Promise<Contact> {
    const { generatedMaps: [{ id, created }] } = await this.contactGenericRepository.insert(contact);

    return {
      ...contact,
      id,
      created,
    };
  }
}
