import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity()
export class Vacancy {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column()
  shareType!: string;

  @Column()
  shareValue?: number;

  @Column('timestamp')
  created!: Date;

  @Column('timestamp')
  updated?: Date;

  // TODO: ссылка на проект
  @Column('uuid')
  projectId!: string;

  // TODO: ссылка на владельца
  @Column('uuid')
  ownerId!: string;

  @Column()
  isVacant!: Boolean;

  @Column()
  aboutVacancy?: string;

  @Column()
  aboutFeatures?: string;
}
