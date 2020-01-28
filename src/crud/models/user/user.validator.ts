import { IsEmail, IsNotEmpty, IsString, MaxLength, IsIn, IsDefined, ValidateIf, IsUUID } from 'class-validator'
import { USER_STATUS } from 'src/crud/utils/constants';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

export class UserValidator {

  @ValidateIf(o => o.hasOwnProperty("id"), {always: true })
  @IsIn([], { always: true , message: 'Id not allowed in body.' })
  public id: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public firstName: string;
  
  @ValidateIf(o => o.hasOwnProperty("lastName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public lastName: string;
  
  @ValidateIf(o => o.hasOwnProperty("email"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsEmail({},{ always: true })
  public email: string;
  
  @IsDefined({ groups: [CREATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ groups: [CREATE] })
  @MaxLength(10, { groups: [CREATE] })
  @ValidateIf(o => o.hasOwnProperty("password"), { groups: [UPDATE] })
  @IsIn([], {  groups: [UPDATE], message: 'Password update not allowed here.' })
  public password: string;

  @ValidateIf(o => o.hasOwnProperty("status"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @IsIn([USER_STATUS.ACTIVE], { always: true })
  public status: string;

}