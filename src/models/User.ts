import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  username?: string;

  @Column()
  email!: string;

  @Column()
  password!: boolean;

  @Column('timestamp')
  created!: Date;

  @Column()
  imagePath?: string;

  @Column()
  role?: string;

  @Column()
  about?: string;

  // TODO: Добавить ссылку на дочерние проекты
}
