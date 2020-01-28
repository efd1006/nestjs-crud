import { IsNotEmpty, IsString, MaxLength, IsIn, IsDefined, ValidateIf, IsInstance, ValidateNested, IsOptional } from 'class-validator'
import { ACCOUNT_TYPE } from 'src/crud/utils/constants';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Address } from '../address/address.entity';
import { Contact } from '../contact/contact.entity';
import { AddressValidator } from '../address/address.validator';
import { Type } from 'class-transformer';
import { Product } from '../product/product.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

export class AccountValidator {
  
  @ValidateIf(o => o.hasOwnProperty("id"), {always: true })
  @IsIn([], { always: true , message: 'Id not allowed in body.' })
  public id: string;

  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @IsIn(Object.values(ACCOUNT_TYPE), { always: true })
  public accountType: string;

  @ValidateIf(o => o.accountType === ACCOUNT_TYPE.INDIVIDUAL, { always: true })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public firstName: string;
  
  @ValidateIf(o => o.accountType === ACCOUNT_TYPE.INDIVIDUAL, { always: true })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public lastName: string;

  @ValidateIf(o => o.accountType === ACCOUNT_TYPE.INDIVIDUAL, { always: true })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(13, { always: true })
  public idNumber: string;

  @ValidateIf(o => o.accountType === ACCOUNT_TYPE.BUSINESS, { always: true })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public companyName: string;
  
  @ValidateIf(o => o.accountType === ACCOUNT_TYPE.BUSINESS, { always: true })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(5, { always: true })
  public vatNumber: string;

  @ValidateIf(o => o.accountType === ACCOUNT_TYPE.BUSINESS, { always: true })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(5, { always: true })
  public companyRegistrationNumber: string;

  @IsDefined({ always: true })
  @ValidateNested({ always: true })
  @Type(t => AddressValidator)
  public address: Address;

  @ValidateIf(o => o.hasOwnProperty("contacts"), {always: true })
  @IsIn([], { always: true , message: 'Contact maintenance not allowed here.' })
  public contacts: Contact[];
  
  @ValidateIf(o => o.hasOwnProperty("products"), {always: true })
  @IsIn([], { always: true , message: 'Product maintenance not allowed here.' })
  public products: Product[];

}