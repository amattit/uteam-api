import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'ContactType' })
export class ContactTypeModel {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;
}
