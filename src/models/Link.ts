import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity()
export class Link {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  link!: string;

  // TODO: ссылка на пользователя
  @Column('uuid')
  ownerId!: string;

  // TODO: Ссылка на проект
  @Column('uuid')
  projectId!: string;

  @Column('timestamp')
  created!: Date;

  @Column('timestamp')
  updated?: Date;
}
