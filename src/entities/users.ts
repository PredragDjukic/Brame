import {Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class users extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id!: number;
  @Column({ type: 'varchar', nullable: false })
  username!: string;
  @Column({ type: 'varchar', nullable: false })
  password!: string;
}