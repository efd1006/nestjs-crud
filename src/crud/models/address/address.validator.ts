import { IsEmail, IsNotEmpty, IsString, MaxLength, IsIn, IsDefined, ValidateIf, IsUUID } from 'class-validator'
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

export class AddressValidator {
  
  // TODO - Validate that the id currently allocated is supplied. This will ensure that a user generated UUID cannot be passed.
  @ValidateIf(o => o.hasOwnProperty("id"), { groups: [CREATE] })
  @IsIn([], { groups: [CREATE], message: 'Id not allowed in body.' })
  @IsDefined({ groups: [UPDATE] })
  @IsUUID("4", { groups: [UPDATE] }) 
  public id: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  public location: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public suburb: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public region: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(50, { always: true })
  public country: string;

  @ValidateIf(o => o.hasOwnProperty("firstName"), {  groups: [UPDATE] })
  @IsDefined({ always: true })
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MaxLength(6, { always: true })
  public postalCode: string;

}