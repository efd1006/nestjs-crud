
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { ENTITIES } from 'src/crud/utils/constants';
import { AddressValidator } from './address.validator';

@Crud({
  model: {
    type: AddressValidator,
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
      
    ],
    exclude: [
      'getOneBase', 
      'getManyBase',
      'createOneBase',
      'createManyBase',
      'updateOneBase',
      'replaceOneBase',
      'deleteOneBase'
    ],
  },
  query: {
    join: {
      account: {
        eager: false
      }
    },
    alwaysPaginate: true,
    maxLimit: 5,
  },
})
@Controller(ENTITIES.ADDRESS)
export class AddressController  implements CrudController<Address> {
  constructor(public service: AddressService) {}
}