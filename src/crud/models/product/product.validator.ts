import { IsNotEmpty, IsString, MaxLength, IsIn, IsDefined, ValidateIf } from 'class-validator'
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

export class ProductValidator {
  
  @ValidateIf(o => o.hasOwnProperty("id"), { groups: [CREATE] })
  @IsIn([], { always: true, message: 'Id not allowed in body.' })
  public id: string;

  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public productName: string;

}