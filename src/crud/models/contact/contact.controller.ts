
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';
import { ENTITIES } from 'src/crud/utils/constants';
import { ContactValidator } from './contact.validator';

@Crud({
  model: {
    type: ContactValidator,
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id',
    },
  },
  routes: {
    only: [
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
      //TODO - get contact for account and deactivate getManyBase
    ],
    exclude: [
      'getOneBase', 
      'createManyBase',
      'replaceOneBase',
    ],
  },
  query: {
    join: {
      account: {
        eager: true
      }
    },
    alwaysPaginate: true,
    maxLimit: 30,
  },
})
@Controller(ENTITIES.CONTACT)
export class ContactController  implements CrudController<Contact> {
  constructor(public service: ContactService) {}
}