import { PrimaryGeneratedColumn } from "typeorm";

export abstract class AbstractEntity {

  @PrimaryGeneratedColumn("uuid")
  public id: string;

}