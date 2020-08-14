import {
  Entity, Column, Generated, PrimaryColumn,
} from 'typeorm';
import { LabelType } from '../../models/interfaces/LabelType';

@Entity({ name: 'LabelType' })
export class LabelTypeModel implements LabelType {
  @PrimaryColumn()
  @Generated('uuid')
  id?: string;

  @Column()
  title!: string;
}
