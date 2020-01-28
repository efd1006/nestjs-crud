import { Entity, ManyToOne, Column, JoinColumn } from "typeorm";
import { AbstractEntity } from "src/crud/entities/AbstractEntity";
import { Account } from "../account/account.entity";
import { Product } from "../product/product.entity";

@Entity()
export class AccountProduct extends AbstractEntity{
  
    @ManyToOne(type => Account, account => account.products)
    public account: Account;
    

    @ManyToOne(type => Product, product => product.accounts)
    @JoinColumn()
    public product: Product;

}