import {
  Entity, Column, Generated, PrimaryColumn, ManyToOne,
} from 'typeorm';

// eslint-disable-next-line import/no-cycle
import { User } from './User';

@Entity()
export class Project {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column('timestamp')
  created!: Date;

  @Column('timestamp')
  updated?: Date;

  @Column('uuid')
  ownerId!: string;

  @Column()
  imagePath?: string;

  @Column()
  isPublished!: boolean;

  // Момент смущает
  @ManyToOne(() => User, (user) => user.projects)
  user!: User;
}
