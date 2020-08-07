import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUserProjectMigration1596791673156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'UserProject',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'userId',
          type: 'int',
        },
        {
          name: 'projectId',
          type: 'int',
        },
      ],
    }), true, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('');
  }
}
