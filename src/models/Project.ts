import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

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

  // Тут по идее должен быть пользователь
  // TODO: уточнить
  @Column('uuid')
  ownerId!: string;

  @Column()
  imagePath?: string;

  @Column()
  isPublished!: boolean;
}
