import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity()
export class ContactType {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;
}
