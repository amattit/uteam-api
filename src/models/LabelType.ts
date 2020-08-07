import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity()
export class LabelType {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;
}
