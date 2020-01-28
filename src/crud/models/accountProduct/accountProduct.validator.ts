import { IsNotEmpty, IsString, MaxLength, IsIn, IsDefined, ValidateIf } from 'class-validator'
import { CrudValidationGroups } from '@nestjsx/crud';
import { Product } from '../product/product.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

export class AccountProductValidator {
  
  @ValidateIf(o => o.hasOwnProperty("id"), { groups: [CREATE] })
  @IsIn([], { always: true, message: 'Id not allowed in body.' })
  public id: string;

  //TODO - Error handling for invalid account ID
  @IsDefined({ groups: [CREATE] })
  @ValidateIf(o => o.hasOwnProperty("account"), { groups: [UPDATE] })
  @IsIn([], {  groups: [UPDATE], message: 'Account Product update not allowed. Delete and/or create new products.' })
  public account: Account;

  //TODO - Error handling for invalid product ID
  @IsDefined({ groups: [CREATE] })
  @ValidateIf(o => o.hasOwnProperty("account"), { groups: [UPDATE] })
  @IsIn([], {  groups: [UPDATE], message: 'Account Product update not allowed. Delete and/or create new products.' })
  public product: Product;
}