import { ConnectionOptions } from 'typeorm';
import { databaseConfig } from './databseConfig';

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.userName,
  password: databaseConfig.password,
  database: databaseConfig.databaseName,
  entities: [],
  synchronize: true,
  migrations: ['src/shared/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/shared/database/migrations',
  },
};

export = ormconfig;
