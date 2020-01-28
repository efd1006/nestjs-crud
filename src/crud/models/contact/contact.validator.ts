import { IsEmail, IsNotEmpty, IsString, MaxLength, IsIn, IsDefined, ValidateIf, IsPhoneNumber } from 'class-validator'
import { CONTACT_TYPE } from 'src/crud/utils/constants';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

export class ContactValidator {
  
  @ValidateIf(o => o.hasOwnProperty("id"), {always: true })
  @IsIn([], { always: true , message: 'Id not allowed in body.' })
  public id: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @IsIn(Object.values(CONTACT_TYPE), { always: true })
  public contactType: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public firstName: string;
  
  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public lastName: string;
  
  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsEmail({},{ always: true })
  public email: string;
  
  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @IsPhoneNumber('ZA', { always: true })
  public phone: string;
  
  //TODO - Error handling for invalid account ID
  @IsDefined({ groups: [CREATE] })
  @ValidateIf(o => o.hasOwnProperty("account"), { groups: [UPDATE] })
  @IsIn([], {  groups: [UPDATE], message: 'Account update not allowed. Delete and/or create new contacts.' })
  public account: Account;

}