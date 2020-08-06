import { DatabaseConfig } from '../entities/DatabaseConfig';

const {
  DB_HOST: host,
  DB_PORT: port,
  DB_NAME: databaseName,
  DB_USER_NAME: userName = 'root',
  DB_PASSWORD: password,
} = process.env;

export const databaseConfig: DatabaseConfig = {
  databaseName: databaseName!,
  host: host!,
  password: password!,
  port: Number(port!),
  userName: userName!,
};
