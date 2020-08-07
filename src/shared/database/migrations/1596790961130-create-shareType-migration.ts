import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createShareTypeMigration1596790961130 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ShareType',
      columns: [
        {
          name: 'id',
          type: 'varchar(36)',
          isPrimary: true,
        },
        {
          name: 'title',
          type: 'varchar',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ShareType');
  }
}
