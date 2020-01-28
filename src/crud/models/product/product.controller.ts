
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ENTITIES } from 'src/crud/utils/constants';
import { ProductValidator } from './product.validator';

@Crud({
  model: {
    type: ProductValidator,
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
      //TODO - deactivate product
      //TODO - only get the active products for allocation 
      //TODO - validate active state on allocation
    ],
    exclude: [
      'createManyBase',
      'replaceOneBase',
      'deleteOneBase',
    ],
  },
  query: {
    join: {
      accounts: {
        eager: false
      },
    },
    maxLimit: 50,
  },
})
@Controller(ENTITIES.PRODUCT)
export class ProductController  implements CrudController<Product> {
  constructor(public service: ProductService) {}
}