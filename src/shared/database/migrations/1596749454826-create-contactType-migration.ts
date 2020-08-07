import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createContactTypeMigration1596749454826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ContactType',
      columns: [
        {
          name: 'id',
          type: 'int',
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
    queryRunner.dropTable('ContactType');
  }
}
