
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AccountProductService } from './accountProduct.service';
import { ENTITIES } from 'src/crud/utils/constants';
import { AccountProduct } from './accountProduct.entity';
import { AccountProductValidator } from './accountProduct.validator';

@Crud({
  model: {
    type: AccountProductValidator,
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
      //TODO - get allocated products by account AND deactivate getManyBase
      //TODO - add product allocation status REQUEST/APPROVED/ACTIVE/DEACTIVATED/INACTIVE
      //TODO - add changeStatus api 
    ],
    exclude: [
      'getOneBase',
      'createManyBase',
      'replaceOneBase',
      'updateOneBase',
      'deleteOneBase',
      'deleteOneBase',
    ],
  },
  query: {
    join: {
      account: {
        eager: false
      },
      product: {
        eager: false
      },
    },
    maxLimit: 50,
  },
})
@Controller(ENTITIES.ACCOUNT_PRODUCT)
export class AccountProductController  implements CrudController<AccountProduct> {
  constructor(public service: AccountProductService) {}
}