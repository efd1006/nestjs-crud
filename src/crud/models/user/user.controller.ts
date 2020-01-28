
import { Controller, Post, Param, Patch, UseInterceptors } from '@nestjs/common';
import { Crud, CrudController, ParsedRequest, CrudRequest, CrudRequestInterceptor } from '@nestjsx/crud';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ENTITIES, USER_STATUS } from 'src/crud/utils/constants';
import { UserValidator } from './user.validator';
import { UserInterceptor } from 'src/crud/models/user/user.inteceptor';

@Crud({
  model: {
    type: UserValidator,
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
      //TODO - confirm deactivate user
      //TODO - sort out roles
    ],
    exclude: [
      'createManyBase',
      'replaceOneBase',
      'deleteOneBase',
    ],
    createOneBase: {
      interceptors: [UserInterceptor]
    },
    createManyBase: {
      interceptors: [UserInterceptor]
    },
    updateOneBase: {
      interceptors: [UserInterceptor]
    },
    replaceOneBase: {
      interceptors: [UserInterceptor]
    },
  },
  query: {
    exclude: ["password"],
    alwaysPaginate: true,
    maxLimit: 50,
  },
})
@Controller(ENTITIES.USER)
export class UserController  implements CrudController<User> {
  constructor(public service: UserService) {}

  @UseInterceptors(CrudRequestInterceptor)
  @Patch('deactivate/:id')
  async deactivate(@ParsedRequest() req: CrudRequest, @Param('id') id: string,) {
    let user;
    await this.service.findOne(id).then(result => {
      user = result;
      user.status = USER_STATUS.DEACTIVATED;
    });
    return await this.service.updateOne(req,user);
  }
}