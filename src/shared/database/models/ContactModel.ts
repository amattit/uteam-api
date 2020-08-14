import {
  Entity, Column, Generated, PrimaryColumn,
  ManyToOne,
} from 'typeorm';
import { UserModel } from './UserModel';
import { Contact } from '../../models/interfaces/Contact';

@Entity({ name: 'Contact' })
export class ContactModel implements Contact {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  link!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created?: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updated?: Date;

  @Column('uuid')
  ownerId?: string;

  @ManyToOne(() => UserModel, (user) => user.contacts)
  owner?: UserModel;
}
