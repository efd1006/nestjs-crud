import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { AbstractEntity } from "src/crud/entities/AbstractEntity";
import { CONTACT_TYPE } from "src/crud/utils/constants";
import { Account } from "../account/account.entity";

@Entity()
export class Contact extends AbstractEntity {

  @Column()
  public firstName: string;
  
  @Column()
  public lastName: string;
  
  @Column()
  public email: string;

  @Column()
  public phone: string;

  @Column({
    type: 'enum',
    enum: CONTACT_TYPE,
    default: CONTACT_TYPE.PRIMARY 
  })
  public contactType: string;

  @ManyToOne(type => Account, account => account.contacts)
  account: Account;

}