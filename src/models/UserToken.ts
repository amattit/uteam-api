import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity()
export class UserToken {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  string!: string;

  @Column()
  expiresAt!: Date;

  @Column('uuid')
  userID!: string;
}
