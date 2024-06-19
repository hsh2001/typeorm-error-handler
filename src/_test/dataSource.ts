import { DataSource } from 'typeorm';
import { TestRecord } from './testRecord.entity';

export const getDataSource = () =>
  new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123123',
    synchronize: true,
    database: 'test',
    entities: [TestRecord],
  });
