import { Contact } from '../../models/interfaces/Contact';

export interface ContactRepository {
  create(contact: Contact): Promise<Contact>;
}
