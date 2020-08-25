import {
  Entity,
  Column,
  Generated,
  PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './UserModel';

import { FavoriteUser } from '../../models/interfaces/FavoriteUser';

@Entity({ name: 'FavoriteUsers' })
export class FavoriteUserModel implements FavoriteUser {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  userId!: string;

  @Column()
  favoriteUserId!: string;

  @ManyToOne(() => UserModel)
  user?: UserModel;

  @ManyToOne(() => UserModel)
  favoriteUser?: UserModel;
}
