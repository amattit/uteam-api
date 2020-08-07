import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createLabelMigration1596749035815 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'LabelType',
      columns: [
        {
          name: 'id',
          type: 'uuid',
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
    await queryRunner.dropTable('labelType');
  }
}
