import {
  Inject, Injectable, Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { ContactEntity } from './models/ContactEntity';
import { ContactRepository } from '../../shared/repositories/contact/ContactRepository';

@Injectable({ scope: Scope.REQUEST })
export class ContactService {
  constructor(
    @Inject('ContactRepository') private contactRepository: ContactRepository,
    @Inject(REQUEST) private readonly request: Request,
  ) {
  }

  async addContactToUser(contact: ContactEntity) {
    return this.contactRepository.create({
      ...contact,
      ownerId: this.request.user!.id,
    });
  }

  async updateContact(contactId: string, contact: ContactEntity) {
    return this.contactRepository.update(contactId, {
      ...contact,
    });
  }

  async deleteContact(contactId: string) {
    return this.contactRepository.delete(contactId);
  }
}
