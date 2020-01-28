
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Account } from './account.entity';
import { AccountService } from './account.service';
import { ENTITIES } from 'src/crud/utils/constants';
import { AccountValidator } from './account.validator';
import { AccountInterceptor } from './account.interceptor';

@Crud({
  model: {
    type: AccountValidator,
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
      'getOneBase', 
      'getManyBase',
      'createOneBase',
      'updateOneBase',
    ],
    exclude: [
      'createManyBase',
      'replaceOneBase',
      'deleteOneBase',
    ],
    createOneBase: {
      interceptors: [AccountInterceptor]
    },
    createManyBase: {
      interceptors: [AccountInterceptor]
    },
    updateOneBase: {
      interceptors: [AccountInterceptor]
    },
    replaceOneBase: {
      interceptors: [AccountInterceptor]
    },
  },
  query: {
    join: {
      address: {
        eager: true
      },
      contacts: {
        eager: true
      },
      products: {
        eager: true
      }
    },
    alwaysPaginate: true,
    maxLimit: 30,
  },
})
@Controller(ENTITIES.ACCOUNT)
export class AccountController  implements CrudController<Account> {
  constructor(public service: AccountService) {}
}