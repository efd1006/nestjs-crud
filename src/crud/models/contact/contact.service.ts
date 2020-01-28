
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService extends TypeOrmCrudService<Contact> {
  constructor(@InjectRepository(Contact) repo) {
    super(repo);
  }
}