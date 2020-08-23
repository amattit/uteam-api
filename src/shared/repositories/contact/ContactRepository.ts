import { Contact } from '../../models/interfaces/Contact';

export interface ContactRepository {
  create(contact: Contact): Promise<Contact>;
  update(id: string, link: Partial<Contact>): Promise<void>;
  delete(id: string): Promise<void>;
}
