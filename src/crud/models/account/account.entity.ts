import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { AbstractEntity } from "src/crud/entities/AbstractEntity";
import { ACCOUNT_TYPE } from "src/crud/utils/constants";
import { Address } from "../address/address.entity";
import { Contact } from "../contact/contact.entity";
import { AccountProduct } from "../accountProduct/accountProduct.entity";

@Entity()
export class Account extends AbstractEntity {

  @Column({
    type: 'enum',
    enum: ACCOUNT_TYPE
  })
  public accountType: string;
  
  @Column({
    type: 'varchar'
  })
  public firstName: string;
  
  @Column({
    type: 'varchar'
  })
  public lastName: string;

  @Column({
    type: 'varchar'
  })
  public idNumber: string;

  @Column({
    type: 'varchar'
  })
  public companyName: string;
  
  @Column({
    type: 'varchar'
  })
  public vatNumber: string;

  @Column({
    type: 'varchar'
  })
  public companyRegistrationNumber: string;

  @OneToOne(type => Address, {
    cascade: true
  })
  @JoinColumn({ 
    name: "addressFk" 
  })
  public address: Address;

  @OneToMany(type => Contact, contact => contact.account, {
    cascade: false
  })
  public contacts: Contact[];

  @OneToMany(type => AccountProduct, accountProduct => accountProduct.account, {
    cascade: false
  })
  public products: AccountProduct[];
  
}