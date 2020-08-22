import { ConnectionOptions } from 'typeorm';
import { databaseConfig } from './databseConfig';
import { ContactModel } from '../models/ContactModel';
import { ContactTypeModel } from '../models/ContactTypeModel';
import { LabelTypeModel } from '../models/LabelTypeModel';
import { LinkModel } from '../models/LinkModel';
import { ProjectModel } from '../models/ProjectModel';
import { UserModel } from '../models/UserModel';
import { UserTokenModel } from '../models/UserTokenModel';
import { VacancyModel } from '../models/VacancyModel';
import { ProjectLabelTypeModel } from '../models/ProjectLabelTypeModel';

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.userName,
  password: databaseConfig.password,
  database: databaseConfig.databaseName,
  entities: [
    ContactModel,
    ContactTypeModel,
    LabelTypeModel,
    LinkModel,
    ProjectModel,
    UserModel,
    UserTokenModel,
    VacancyModel,
    ProjectLabelTypeModel,
  ],
  synchronize: false,
  charset: 'utf8mb4',
  migrations: ['src/shared/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/shared/database/migrations',
  },
};

export = ormconfig;
