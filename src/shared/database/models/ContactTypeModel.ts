import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity()
export class ContactTypeModel {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;
}
