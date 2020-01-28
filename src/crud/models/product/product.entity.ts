import { Entity, Column, ManyToMany, OneToMany } from "typeorm";
import { AbstractEntity } from "src/crud/entities/AbstractEntity";
import { AccountProduct } from "../accountProduct/accountProduct.entity";

@Entity()
export class Product extends AbstractEntity {

  @Column({
    type: 'varchar'
  })
  public productName: string;

  @OneToMany(type => AccountProduct, accountProduct => accountProduct.product, {
    cascade: false
  })
  public accounts: Promise<AccountProduct[]>;
  
}