import { MigrationInterface, QueryRunner } from 'typeorm';

// eslint-disable-next-line
const collationQuery = 'ALTER SCHEMA `uteamDB` DEFAULT CHARACTER SET `utf8` DEFAULT COLLATE `utf8_unicode_ci`';

export class setCollation1596723753311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(collationQuery);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
