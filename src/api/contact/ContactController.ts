import {
  Body,
  Controller, Delete, Param, Post, Put, UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ContactService } from './ContactService';
import {
  ContactTags,
  AddContactMethodDocs,
  UpdateContactMethodDocs,
  DeleteContactMethodDocs,
} from './docs';
import { ContactEntity } from './models/ContactEntity';

@Controller('v1/user/contact')
@ContactTags
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @AddContactMethodDocs
  addContactToUser(@Body() contact: ContactEntity) {
    return this.contactService.addContactToUser(contact);
  }

  @Put(':contactId')
  @UseGuards(AuthGuard('jwt'))
  @UpdateContactMethodDocs
  updateContact(
  @Param('contactId') contactId: string,
    @Body() contact: ContactEntity,
  ) {
    return this.contactService.updateContact(contactId, contact);
  }

  @Delete(':contactId')
  @UseGuards(AuthGuard('jwt'))
  @DeleteContactMethodDocs
  deleteContact(
  @Param('contactId') contactId: string,
  ) {
    return this.contactService.deleteContact(contactId);
  }
}
