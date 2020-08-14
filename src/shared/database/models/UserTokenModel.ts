import {
  Entity, Column, Generated, PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './UserModel';
import { UserToken } from '../../models/interfaces/UserToken';

@Entity({ name: 'UserToken' })
export class UserTokenModel implements UserToken {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  string!: string;

  @Column()
  expiresAt!: Date;

  userID!: string;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ManyToOne(() => UserModel, (user) => user.userToken)
  user?: UserModel;
}
