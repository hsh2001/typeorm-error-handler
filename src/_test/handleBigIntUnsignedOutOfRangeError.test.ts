import { DataSource } from 'typeorm';
import { getDataSource } from './dataSource';

describe('handleBigIntUnsignedOutOfRangeError', () => {
  let dataSource: DataSource;

  beforeAll(async () => {
    dataSource = await getDataSource().initialize();
  });

  afterAll(() => dataSource?.destroy());

  it('should pass', () => {
    expect(1).toBe(1);
  });
});
