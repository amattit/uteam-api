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

  @Column()
  link!: string;

  @Column()
  created!: Date;

  @Column()
  updated?: Date;

  @Column('uuid')
  ownerId!: string;
}
