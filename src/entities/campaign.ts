import {Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class campaign extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id!: number;
  @Column({ type: 'varchar', nullable: false })
  name!: string;
  @Column({ type: 'int', nullable: false })
  status!: string;
  @Column({ type: 'timestamp', nullable: true })
  startDate!: string;
  @Column({ type: 'varchar', nullable: true })
  imagePath!: string;
}