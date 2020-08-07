import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUserTokenMigration1596791141198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'UserToken',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'expiresAt',
          type: 'timestamp',
        },
        {
          name: 'string',
          type: 'varchar',
        },
        {
          name: 'userID',
          type: 'int',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('UserToken');
  }
}
