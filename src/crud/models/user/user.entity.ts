import { Entity, Column, Unique } from "typeorm";
import { AbstractEntity } from "src/crud/entities/AbstractEntity";
import { UNIQUE_EMAIL_CONSTRAINT } from "src/crud/utils/constants";

@Entity()
@Unique(UNIQUE_EMAIL_CONSTRAINT, ["email"])
export class User extends AbstractEntity {

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
  public email: string;
  
  @Column({
    type: 'varchar'
  })
  public password: string;
  
  @Column({
    type: 'varchar'
  })
  public status: string;

}