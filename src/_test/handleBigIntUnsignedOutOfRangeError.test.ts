import { DataSource, Repository } from 'typeorm';
import { getDataSource } from './dataSource';
import { TestRecord } from './testRecord.entity';

describe('handleBigIntUnsignedOutOfRangeError', () => {
  let dataSource: DataSource;
  let testRecordRepository: Repository<TestRecord>;

  beforeAll(async () => {
    dataSource = await getDataSource().initialize();
    testRecordRepository = dataSource.getRepository(TestRecord);
  });

  afterAll(() => dataSource?.destroy());

  it('should pass', () => {
    expect(1).toBe(1);
  });
});
