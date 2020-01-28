
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AccountProduct } from './accountProduct.entity';

@Injectable()
export class AccountProductService extends TypeOrmCrudService<AccountProduct> {
  constructor(@InjectRepository(AccountProduct) repo) {
    super(repo);
  }
}