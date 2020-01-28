import { Entity, Column, OneToOne } from "typeorm";
import { AbstractEntity } from "src/crud/entities/AbstractEntity";
import { Account } from "../account/account.entity";

@Entity()
export class Address extends AbstractEntity {
  
  @Column({
    type: 'varchar'
  })
  public location: string;

  @Column({
    type: 'varchar'
  })
  public suburb: string;

  @Column({
    type: 'varchar'
  })
  public region: string;

  @Column({
    type: 'varchar'
  })
  public country: string;

  @Column({
    type: 'varchar'
  })
  public postalCode: string;
  
}